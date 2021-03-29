# Installation und erste Schritte

Da express ein Framework für die Node.js Plattform ist, müsste man wenn es noch nicht geschen ist [Node.js](https://nodejs.org/de/) installieren

1. Nachdem Node.js installiert wurde legt man sich einen Projektordner an
   
        mkdir new_Project
        cd new_Project

2. Danach muss man ein neues Node.js initieren
    
        npm init 
   
3. Nun müsste man express.js mit dem Node Package Manager(NPM) installieren
   
        npm install express

4. Nun folgt noch ein kleines Code Beispiel, in diesem soeben angelegten Verzeichnis erstellen wir eine Datei names app.js 
   
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

6. Zum starten führen wir den Befehl

         node app.js aus 



## Quellen

* [Installation Node.js](https://nodejs.org/de/)
* [Installation Express.js](https://expressjs.com/de/starter/installing.html)

 