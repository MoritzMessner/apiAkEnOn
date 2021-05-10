const createError = require('http-errors');
const express = require('express')
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const initDb = require("./db").initDb;
const app = express()
const port = 3000

// set twig as default view-engine
// and configure the views folder as default view folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(session({secret: "Your secret key"}));

// set handler for static files
// static contains, static html, img and files
// data contains user content, like profile pictures and img from posts
app.use(express.static('public'))
app.use('/data', express.static('data'))

// include controllers
var indexRouter = require('./controllers/index');
var post = require('./controllers/post');
var signup = require('./controllers/signup');
var login = require('./controllers/login');


// set path for controllers
app.use('/', indexRouter);
app.use('/post', post);
app.use('/signup', signup);
app.use('/login', login);


app.get('/protected_page', checkSignIn, function (req, res) {
    res.render('protected_page', {id: req.session.user.id})
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404, "-- Not Found"));
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = err;

    // render the error page
    res.status(err.status);
    res.render('error');
});

function checkSignIn(req, res, next) {
    if (req.session.user) {
        next();     //If session exists, proceed to page
    } else {
        var err = new Error("Not logged in!");
        console.log(req.session.user);
        next(err);  //Error, trying to access unauthorized page!
    }
}


// listens for incoming connections on specific port
initDb(function (err) {
    app.listen(port, function (err) {
        if (err) {
            throw err; //
        }
        console.log(`Example app listening at http://localhost:${port}`)
    });
});
