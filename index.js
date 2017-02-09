var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var posts = require('./Home_instagram/Posts.js');
// You can store key-value pairs in express, here we store the port setting
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(bodyParser.json());
app.get('/', function(req, res) {
    res.send("Hello world");
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
