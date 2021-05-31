var express = require('express');
var router = express.Router();
var model = require('../models/postModel');

router.get('/', checkIfPostExists, function (req, res, next) {
    res.render("post", res.locals)
});


router.post("/addComment", (req, res, next) => {
    let postId = req.body.postId;
    let commentVal = req.body.comment;
    model.addComment(postId, commentVal);
    res.send("ok")
})


async function getPost(res) {
    res.locals.post = await model.fetchPost(res.locals.postId);
}

async function checkIfPostExists(req, res, next) {
    res.locals.postId = req.query.postId;
    if (res.locals.postId === undefined || res.locals.postId.trim() === "")
        console.log("error");
    await getPost(res);
    res.locals.comments = await model.fetchComments(res.locals.postId);
    console.log(res.locals.comments)
    next();
}


module.exports = router;
