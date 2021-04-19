var express = require('express');
var router = express.Router();
const samplePost = require('../data/samplePost.json');
const sql = require('../db.js');

router.get('/', function (req, res, next) {
    res.render("post", samplePost)
});

module.exports = router;
