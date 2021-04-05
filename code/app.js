const express = require('express')
const app = express()
const port = 3000


let myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};


let requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};

app.use(requestTime,myLogger);
app.use(express.static('static'));


app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.sendFile("html/index.html",{ root: "static" })
})
app.get('/home', (req, res) => {
    res.send('Hello Home!')
})


app.get('/date', function (req, res) {
    let responseText = 'Hello World!';
    responseText += ' Requested at: ' + req.requestTime + '';
    res.send(responseText);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
