var express = require('express');
var router = express.Router();
var model = require('../models/postModel');


router.all('/', async function (req, res, next) {
    res.locals.posts = await model.fetchPosts();
    res.render("home", {"data": res.locals.posts});
});

module.exports = router;
