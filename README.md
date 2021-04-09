# ExpressJs
 Repository für das Modul Aktuelle Entwicklungen im Bereich Online Medien im 6. Semester


---
## Leitfaden 

1. [Installation](01_Installation.md)
2. [Hello World!](02_helloWorld.md)
3. ~~HTTP Fehlerbehandlung~~
3. [Middleware](04_middleware.md)

---
## Roadmap
### Forum
- [ ] Login, Nutzer sollen sich registrieren/anmelden können
- [ ] Übersicht über alle bestehenden Foreneinträge
- [ ] Filterung von Beiträgen nach Kategorie
### Nutzer
- [ ] Einen Account anlegen
- [ ] Beiträge selbst in dem Forum anlegen
- [ ] Beiträge anderer Nutzer kommentieren
- [ ] Eigenen Beiträge bearbeiten
- [ ] Eigene Beiträge löschen
- [ ] Accountdaten bearbeiten (z.B. E-Mail ändern, Profilbild ändern)

---

## Themenfindung


Entwicklung eines Online Forums mit dem Augenmerk auf das Node Framework „express.js“.
In dem Online Forum soll es möglich sein, sich mit anderen Nutzern, textbasiert über bestimmte Themen auszutauschen. Nutzer sollen zum Beispiel selbst einen neuen „Thread“ anlegen können, welcher dann von anderen Nutzern kommentiert werden kann.

### Was ist express.js?

Express ist ein Framework für die Node Plattform, welches Node um einige Funktionalitäten erweitert. Diese Erweiterung soll das Entwickeln von Webanwendungen einfacher gestalten.
Eine der Stärken von express.js ist es, einfach Middlewares zu nutzen, man kann zum Beispiel einer Anfrage mehrere Requesthandler zuweisen welche dann nacheinander abgearbeitet werden.

Hier ein Beispiel:
```javascript
app.get('/adminArea', authentication(request, response, next), showAdminArea(request, response))
```
Hier wird eine Authentifizierung eingeschoben.

### Was ist node.js?

Node ist eine Runtime Environment und erlaubt es JavaScript Code außerhalb eines Webbrowsers auszuführen. Mithilfe von Node kann man das komplette Backend einer Website in JavaScript schreiben. Node wurde mit dem Fokus auf Performance entwickelt und hat außerdem noch den Vorteil, dass Frontend und backend beide auf JavaScript zurückgreifen.

Weitere Technologien, welche benutzt werden sollen.

- express.js
- MongoDB oder MySQL
- HTML/ CSS
- Node.js

Was möchte ich mir an „express.js“ anschauen.

- Wie strukturiere ich ein „express.js“ Projekt
- Wie funktioniert das Error Handling
- Wie baut man Nutzer Authentifikation in ein express Projekt ein?
- Wie funktioniert das Debugging von express.js
- Wie integriere ich eine Datenbank in mein Projekt (MySQL oder MongoDB)
- Was kann ich mit Middlewares machen

Das soll das Forum bieten

- Login, Nutzer sollen sich registrieren/anmelden können
- Übersicht über alle bestehenden Foreneinträge
- Filterung von Beiträgen nach Kategorie

Das soll der Nutzer können:

- Einen Account anlegen
- Beiträge selbst in dem Forum anlegen
- Beiträge anderer Nutzer kommentieren
- Eigenen Beiträge bearbeiten
- Eigene Beiträge löschen
- Accountdaten bearbeiten (z.B. E-Mail ändern, Profilbild ändern)

Es wird sich hauptsachlich mit dem Backend beschäftigt, es soll sich wenig mit dem Frontend beschäftigt werden.

**Kernfrage ist**:
überzeugt Node mit express im Vergleich zu bereits etablierten Backend-Sprachen wie PHP.
