const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.use(express.static('static'));


app.get(['/home',"/"], (req, res) => {
    res.send('Hello Home!')
})


app.get('/file', (req, res, next) => {
    if (req.query.auth === '1')
        next();
    else
        res.send("richtigen Get Parameter angeben")
})


app.get('/file', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/html/index.html'));
})

function auth(req, res, next) {
    if (req.query.auth === '1')
        next()
    else
        res.send("bitte richtigen Get Parameter angeben")
}

function sendToPage(req, res) {
    res.sendFile(path.join(__dirname + '/static/html/index.html'));
}

app.get("/user", auth, sendToPage);
app.post("/user", auth, sendToPage);
app.delete("/user", auth, sendToPage);
app.put("/user", auth, sendToPage);
app.all("/user", auth, sendToPage);



app.get("/", function (req, res, next) {
    res.write("Hello");
    next();
});
app.get("/", function (req, res, next) {
    res.write(" World !!!");
    res.end();
});


const users = require('./static/json/users.json');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.get("/members", (req, res) => {
    res.render("users", users)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})