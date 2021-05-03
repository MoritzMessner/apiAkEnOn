var express = require('express');
var router = express.Router();
var model = require('../models/postModel');

router.get('/', checkIfPostExists,function (req, res, next) {
    res.render("post", res.locals.post)
});


async function checkIfPostExists(req, res, next) {
    res.locals.postId = req.query.postId;
    if (res.locals.postId === undefined || res.locals.postId.trim() === "")
        console.log("error");
    res.locals.post = await model.fetchPost(res.locals.postId);
    next();
}


module.exports = router;
