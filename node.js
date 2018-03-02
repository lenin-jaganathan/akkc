var express = require('express');
var path = require('path');
var app = express();

//var morgan = require('morgan');
//app.use(morgan('dev'));

app.get('/', function(req, res) {
 res.sendFile(path.join(__dirname, '/akkcb/index.html'));
})
app.get('/news', function(req, res) {
 res.sendFile(path.join(__dirname, '/akkcb/news.html'));
})
app.get('/stats', function(req, res) {
 res.sendFile(path.join(__dirname, '/akkcb/stats.html'));
})
app.get('/about', function(req, res) {
 res.sendFile(path.join(__dirname, '/akkcb/about.html'));
})
app.get('/fixtures', function(req, res) {
 res.sendFile(path.join(__dirname, '/akkcb/fixtures.html'));
})

app.listen(80);