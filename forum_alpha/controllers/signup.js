var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/*
var model = require('../models/postModel');
*/

var Users = [];
router.get('/',function (req, res, next) {
    res.render("signup", res.locals.post)
});

router.post('/', function(req, res){
    if(!req.body.id || !req.body.password){
        res.status("400");
        res.send("Invalid details!");
    } else {
        Users.filter(function(user){
            if(user.id === req.body.id){
                res.render('signup', {
                    message: "User Already Exists! Login or choose another user id"});
            }
        });
        var newUser = {id: req.body.id, password: req.body.password};
        Users.push(newUser);
        req.session.user = newUser;
        console.log("in logged")
        res.redirect('/protected_page');
    }
});


module.exports = router;
