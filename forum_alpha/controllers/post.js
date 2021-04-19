var express = require('express');
var router = express.Router();
const samplePost = require('../data/samplePost.json');
const sql = require('../db.js');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render("post", samplePost)
});

module.exports = router;
