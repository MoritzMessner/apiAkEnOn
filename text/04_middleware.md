# Middleware

Eine der großen stärken von Express ist es einfach Middleware in die Applikation zu integrieren. Auch noch zu erwähnen
ist, dass Express ein Routing und Middleware Framework ist. Alles was Express tatsächlich macht, ist, eine Serie von
Middelwares hintereinander auszuführen.

Was kann Middleware leisten:

- Code ausführen
- kann request/ response Objekte verändern
- den request/ response Zyklus beenden
- die nächste Middleware aufrufen

So sieht eine simple Middleware in Express aus.

```javascript
app.get('/', function (req, res, next) {
    res.send('Hello World!')
});
```

1) "**.get**" ist die Methode auf welche sich hier die Middleware Funktion bezieht
2) "**/**" ist die Route auf welche sich hier die Middleware Funktion bezieht
3) "**function**" ist die tatsächliche Funktion der Middleware
4) "**req**" ist das Request Objekt
5) "**res**" ist das Response Objekt
6) "**next**" ist ein Callbackargument für die Middleware Funktion

In dem Rumpf der Middleware können wir außerdem noch den Aufruf der Funktion *next()* sehen, next gibt die Kontrolle an
die nächste Middleware, wenn eine vorhanden, ab.

Mithilfe von *next()* können wir also mehrere Middleware hintereinander ausführen. Das könnte zum Beispiel so ausehen.

```javascript
app.get("/", function (req, res, next) {
    res.write("Hello");
    next(); 
});

app.get("/", function (req, res, next) {
    res.write(" World !!!");
    res.end();
});
```
Hier können wir sehen, dass wir zwei Middleware Funktionen haben auf den gleichen Pfad beziehen. Beiden Funktionen fügen Text zu der Response hinzu, jedoch sendet 
nur die untere (zweite) Middleware sie Response an den Nutzer zurück. Um sicherzustellen, dass nicht nur die erste sondern auch alle anderen Middlewares ausgeführt werden, müssen 
wir in den Middlewares explizit angeben, dass die nächste Middleware ausgeführt werden soll.

Ein denkbares Beispiel wobei dies von Nutzen sein kann, ist folgendes:

```javascript
function requireAdmin(req, res, next) {
    if (!req.user.admin) {
        next(new Error("Permission denied."));
        return;
    }
    next();
}

app.get('/top/secret', loadUser, requireAdmin, function(req, res) {
    res.send('top secret stuff');
});
```

Hier lassen wir den Nutzer nur weiter, wenn bestimmte Konditionen erfüllt sind. Wenn der Nutzer kein Admin ist, wird eine Fehlermeldung geworfen und
somit haben unautorisierte Nutzer keinen Zugriff auf den Pfad "*/top/secret*".


Es gibt fünf verschiedene Middlewaretypen welche wir uns anschauen werden.

Hier eine kurze Übersicht der verschiedenen Middleware Kategorien

- Applikations-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware
---

## Applikations-level middleware
ist Middleware welche an die Instanz von Express gebunden wird. In unseren Beispielen war das immer die Variable "*app*". Mithilfe des Befehls "*.use*" wird diese Middleware an unsere Applikation angehängt.
Hier in diesem Beispiel ist kein Pfad angegeben, dass heißt, diese Middleware wird jedes mal ausgeführt, wenn ein Request eingeht.
```javascript
var express = require('express')
var app = express()

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})
```
alternativ ereichen wir dasselbe auch so:
```javascript
var express = require('express')
var app = express()

let logger = function (req, res, next) {
    console.log('Time:', Date.now())
    next()
}

app.use(logger);
```
Die Methode "*.use*" sieh aber standartmäßig so aus:
```javascript
app.use([path,] callback [, callback...])
```
Wir können hier, wie auch schon im Kapitel 2 gezeigt, mehrere Pfade und Middlewares angeben. 


---

## Router-level middleware
Diese Middleware funktioniert genau gleich wie in auch im Applikations-level, sie wird nur nicht an "*app*", also die Instanz von 
Express, sondern die Instanz von Router gebunden.
```javascript
var express = require('express')
var app = express()
var router = express.Router()

router.use(function (req, res, next) {
    console.log('Time:', Date.now())
next()
})
```

---

## Error-handling middleware
bekommt immer 4 Argumente übergeben, sonst kann Express nicht erkennen, dass es sich um eine Error-handling middlreware handelt. Auch wenn nur nicht alle der vier Parameter verwendet werden müssen sie jedoch angegeben werden. 
```javascript
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
```
Sollte keine der Routen die wir festgelgt haben greifen, senden wir dem Nutzer standartmäßig eine Fehlermeldung zurück. Deswegen müssen wir
Error-handling middleware ganz am schluss unseres main documents definieren!



---

## Third-party middleware
Für express gibt es mittlerweile auch schon Third-party middlewares. [Hier](http://expressjs.com/en/resources/middleware.html) findet man eine Übersicht über die bereits 
erstellten Middlewares.
```javascript
var cookieParser = require('cookie-parser')
app.use(cookieParser());
```