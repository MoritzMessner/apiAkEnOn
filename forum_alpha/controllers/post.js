const express = require('express');
const router = express.Router();
const model = require('../models/postModel');

router.get('/', checkIfPostExists, function (req, res, next) {
    res.render("post", res.locals)
});


router.post("/addComment", (req, res) => {
    let postId = req.body.postId;
    let commentVal = req.body.comment;
    let date = req.body.date;
    model.addComment(postId, commentVal, date);
    res.send("ok")
})


async function getPost(res) {
    res.locals.post = await model.fetchPost(res.locals.postId);
}

async function getComments(res) {
    res.locals.comments = await model.fetchComments(res.locals.postId);
}

async function checkIfPostExists(req, res, next) {
    res.locals.postId = req.query.postId;
    if (res.locals.postId === undefined || res.locals.postId.trim() === "")
        console.log("error");
    await getPost(res);
    await getComments(res);
    next();
}


module.exports = router;
