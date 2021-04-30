var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var model = require('../models/usersModel');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function (req, res) {
    res.render('login');
});

router.post('/', function (req, res) {
    console.log(Users);
    if (!req.body.id || !req.body.password) {
        res.render('login', {message: "Please enter both id and password"});
    } else {
        Users.filter(function (user) {
            if (user.id === req.body.id && user.password === req.body.password) {
                req.session.user = user;
                res.redirect('/protected_page');
            }
        });
        res.render('login', {message: "Invalid credentials!"});
    }
});


async function getUser(req, res, next) {
    res.locals.postId = req.query.postId;

    res.locals.post = await model.fetchUser(res.locals.postId);
    next();
}

module.exports = router;
