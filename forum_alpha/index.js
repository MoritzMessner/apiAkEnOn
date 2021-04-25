const createError = require('http-errors');
const express = require('express')
const app = express()
const path = require('path');
const port = 3000


const initDb = require("./db").initDb;

// set twig as default view-engine
// and configure the views folder as default view folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

// set handler for static files
// static contains, static html, img and files
// data contains user content, like profile pictures and img from posts
app.use('/', express.static('public'))
app.use('/data', express.static('data'))

// include controllers
var indexRouter = require('./controllers/index');
var post = require('./controllers/post');


// set path for controllers
app.use('/', indexRouter);
app.use('/post', post);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


// listens for incoming connections on specific port
initDb(function (err) {
    app.listen(port, function (err) {
        if (err) {
            throw err; //
        }
        console.log(`Example app listening at http://localhost:${port}`)
    });
});
