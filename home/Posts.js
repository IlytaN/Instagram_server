var data = require('../Data/instagram_data.js');
var express = require('express');
var router = express.Router();
var cors = require('cors');

router.route('/posts')
	.get(function(req,res,next){
        res.json(data.AllPosts());
    })
    ;

module.exports = router;
