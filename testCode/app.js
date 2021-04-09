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
let errorHandler = function (err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    console.log('error');

    res.status(500)
    res.render('error', {error: err})
}

function luis(req, res, next) {
    console.log("Luis")
    next()
}

app.use(requestTime, errorHandler, myLogger);
app.use(express.static('static'));


app.get("/", function (httpRequest, httpResponse, next) {
    httpResponse.write("Hello");
    next(); //remove this and see what happens
});
app.get('/luis',luis, function(req, res){
    //Create an error and pass it to the next function
    var err = new Error("Something went wrong");
    next(err);
});


app.get("/", function (httpRequest, httpResponse, next) {
    httpResponse.write(" World !!!");
    httpResponse.end();
});


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
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})