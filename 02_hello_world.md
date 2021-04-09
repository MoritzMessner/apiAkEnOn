# Hello World

Im letzten Teil haben wir uns mit der Installation von Node und Express auseinandergesetzt. Nun werden wir versuchen das im letzten Teil angelegten skript genauer anschauen.

---
Hier importieren wir die Funktionen von dem Modul Express

```javascript
const express = require('express')
```

Der folgende Befehl erzeugt uns eine express Application.
Die Funktion ist eine Top-level Funktion welche aus dem Express modul exportiert wurde.
```javascript
const app = express()
```

Nun müssen wir für später noch eine Portnummer festlegen
```javascript
const port = 3000
```


Als nächstes legen wir uns eine simple Weiterleiten für den Pfad: "/" (root path) an. Hier verwenden wir die "get" Methode um alle eingehenden GET-Requests auf diesen Pfad abzufangen.
Wir könnten hier auf andere HTTP-Anforderungsmethoden verwenden, wie zum Beispiel *post*, *put* oder *delete*.
Als letztes müssen wir noch eine oder mehrere Callback Funktionen, welche ausgeführt werden sollen angeben. Hier in unseren Beispiel verwenden wir eine Callback Funktion in das wir ein 'req'
Objekt stecken, 'req' repräsentiert eine HTTP Anfrage und hat auch alle Eigenschaften einer (query string, parameters, body, header, ...).
Neben dem Request Objekt geben wir nun auch noch ein Response Objekt an, diese Objekt repräsentiert eine HTTP response, welche von der Express Applikation dann gesendet wird, wenn ein Request eingeht.
```javascript
app.get('/', (req, res) => {
     res.send('Hello World!')
})
```

genereller Aufbaue ist wie folgt.
```javascript
app.METHOD(PATH,  callback [, callback ...])
```

Für jeden HTTP Request eine eigene Methode zu schreiben wäre aber lästig, deswegen können wir mit der folgenden Methode einfach alle eingehende Requests für eine Route Abfangen.
genereller Aufbaue ist wie folgt.
```javascript
app.all('/', function (req, res)
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

1. Nachdem Node.js installiert wurde, legt man sich einen Projektordner an
   
        mkdir new_Project
        cd new_Project

2. Danach muss man ein neues Node.js Projekt initiieren
    
        npm init 
   
3. Nun müsste man express.js mit dem Node Package Manager(NPM) installieren
   
        npm install express

4. Nun folgt noch ein kleines Codebeispiel, in diesem soeben angelegten Verzeichnis erstellen wir eine Datei names app.js 
   
         touch app.js

5. Nun können wir in diese Date folgenden Code einfügen.

         const express = require('express')
         const app = express()
         const port = 3000
         
         app.get('/', (req, res) => {
         res.send('Hello World!')
         })
         
         app.listen(port, () => {
         console.log(`Example app listening at http://localhost:${port}`)
         })

6. Zum Starten führen wir den Befehl aus

         node app.js  

Jetzt sollten wir unsere erste kleine Website haben.
![Hello World](images/installation.jpg)



## Quellen

* [Installation Node.js](https://nodejs.org/de/)
* [Installation Express.js](https://expressjs.com/de/starter/installing.html)

 