# Hello World

Im letzten Teil haben wir uns mit der Installation von Node und Express auseinandergesetzt. Nun werden wir versuchen das
im letzten Teil angelegten Skript genauer anzuschauen.

---
Hier importieren wir die Funktionen von dem Modul Express

```javascript
const express = require('express')
```

Der folgende Befehl erzeugt uns eine express Application. Die Funktion ist eine Top-level Funktion welche aus dem
Express modul exportiert wurde.

```javascript
const app = express()
```

Nun müssen wir für später noch eine Portnummer festlegen

```javascript
const port = 3000
```

Als nächstes legen wir uns eine simple Weiterleiten für den Pfad: "/" (root path) an. Hier verwenden wir die "get"
Methode um alle eingehenden GET-Requests auf diesen Pfad abzufangen. Wir könnten hier auch andere
HTTP-Anforderungsmethoden verwenden, wie zum Beispiel *post*, *put* oder *delete*. Als letztes müssen wir noch eine oder
mehrere Callback Funktionen, welche ausgeführt werden sollen angeben. Hier in unseren Beispiel verwenden wir eine
Callback Funktion in das wir ein 'req' Objekt stecken, 'req' repräsentiert eine HTTP Anfrage und hat auch alle
Eigenschaften einer (query string, parameters, body, header, ...). Neben dem Request Objekt geben wir nun auch noch ein
Response Objekt an, diese Objekt repräsentiert eine HTTP response, welche von der Express Applikation dann gesendet
wird, wenn ein Request eingeht.

```javascript
app.get('/', (req, res) => {
    res.send('Hello World!')
})
```

genereller Aufbaue ist wie folgt.

```javascript
app.METHOD(PATH, callback [, callback...]){...}
```

Für jede HTTP Methode eine eigene Methode zu schreiben wäre aber lästig, deswegen können wir mit der folgenden Methode
einfach alle eingehende Requests für eine Route abfangen. Der generelle Aufbau ist wie folgt.

```javascript
app.all('/', function (req, res)){...}
```

Auch interessant zu wissen ist, dass der Parameter *PATH* einen der nachfolgenden Typen haben kann:

- ein String welcher den Pfad repräsentiert
- ein Pfad Muster
- ein regulärer Ausdruck
- eine Kombinationen aus den oben genannten

Hier folgen einige Beispiele:

1) **String**: '/abcd' wird dem Pfad '/abcd' zugeordnet
2) **Pfad Muster**: '/ab*cd' wird den Pfaden, ['/abcd', '/abbcd', '/abbbbbcd'] zugeordnet.
3) **Regulärer Ausdruck**: '/\/abc|\/xyz/' wird den Pfaden, ['/abc', '/xyz'] zugeordnet.
4) **Array**: '['/abcd', '/xyza', /\/lmn|\/pqr/]' wird den Pfaden, ['/abcd, '/xyza', '/lmn', '/pqr'] zugeordnet.

Somit können wir einfach logik für viele Pfade Implementieren. Zum Beispiel können wir bestimme Pfade so mit einer
Authentifikation schützen.

```javascript
app.all('/admin/*', requireAuthentication)
```

oder

```javascript
app.all(['/abcd', '/xyza'], requireAuthentication)
```

*Nun aber weiter zum Skript.*
Innerhalb der Callback Methode können wir nun festlegen was als Response auf den Request gesendet werden soll. Hier in
unserem Beispiel senden wir den Text 'Hello World!' als Response zurück.

```javascript
res.send('Hello World!')
```

Mithilfe der Methode 'listen', welche auf die Instanz von express angewendet wird, in unserem Fall die Variable 'app',
können wir für den vorherigen definierten Port einen HTTP sever starten. Dieser Server wartet dann auf eigehende HTTP Anfragen.
Sollte keine Portnummer angegeben werden, wird das Betriebssystem sich selbst eine ungenutzte Portnummer heraussuchen.
```javascript
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
```

Abschließend noch das kleine Programm in kompletter Form
```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})
```



 