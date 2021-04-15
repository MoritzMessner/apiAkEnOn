# Statische Dateien

In diesem Kapitel schauen wir uns den Umgang mit statischen Dateien ein wenig genauer an. Bis jetzt haben wir gelernt,
dass wir in Express mithilfe von Routing Methoden eingehende Requests behandeln und somit jeden verfügbaren Pfad auch
erst definieren müssen. Wir haben aber auch statische Dateien und wollen nicht für jede dieser einen eigenen Handler
anlegen müssen.

Die Lösung hierfür bietet die Methode welche schon in Express integiert ist. Es ist eine Middleware Funktion welche wir
mithilfe von der *use* Methode in unsere Applikation integrieren.

```javascript
app.use(express.static('staticDirectory'))
```

Hier in diesem Beispiel haben wir einen Ordner, welcher direkt im root directory zu finden ist, mit dem Namen
*staticDirectory*, in diesem Ordner verwalten wir all unsere Statische Dateien.

Unsere Ordnerstruktur sieht hier also zum Beispiel wie folgt aus.

```
root
├── staticDirectory
│   └── html
│   └── css
│   └── js
│   └── images
└── dir
    └── file
    └── ...
```

Mit dem oben aufgeführten Befehl können wir jetzt auf unsere statischen Dateien zugreifen, ohne für jede einen eigenen
Requesthandler schreiben zu müssen.

```
http://localhost:3000/js/main.js
http://localhost:3000/css/main.css
http://localhost:3000/images/logo.png
http://localhost:3000/html/faq.html
```

---
Schauen wir uns nun einemal die Methode etwas genauer an:

```javascript
express.static(PATH, [options])
```

1) "**express**" ist unsere Express Applikation
2) "**static**" ist die Methode um die es hier geht
3) "**PATH**" ist der Ordner in dem sich unsere Statischen Dateien befinden, immer vom Root directory aus
4) "**options**" sind zusätzliche eigenschaften, welche wir noch definieren dürfen.

**static** ist im Kern eine Middlewarefunktion, welche uns statische Dateien bereitstellt. Sollte eine Datei aus welchen
Gründen auch immer mal nicht gefunden werden, sendent diese Middelware nicht einfach einen 404 Error an den Benutzer
zurück, sondern ruft standardmäßig die *next()* Callback Funktion auf. Somit können wir auch Fall Backs einbauen/
stacken.

Auch der Parameter **options** is durchaus interessant, da wir hier viel kontrolle bekommen und spezielle Einstellungen
vornehmen können.

```javascript
const options = {
    extensions: ['htm', 'html'],
    dotfiles: 'ignore',
    index: false,
    maxAge: '1d',
}

app.use(express.static('public', options))
```

Hier können wir sehen wie wir mehrere Optionen auf einmal integrieren. Wir können zum Beispiel angeben welche Dateitypen
zurückgesendet werden sollen, sollte es die angefragte Datei nicht geben, wird nach einem Dateityp gesucht welcher in
extensions steht. Auch können wir einstellen ob "*unsichtbare*" Dateien ignoriert oder beachtet werden sollen. 

## Quellen

[Dokementation von static](https://expressjs.com/en/5x/api.html#express.static)