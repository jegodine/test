'use strict'
var express = require('express');
    var app = express();
    var port = process.env.PORT || 80;
var bodyParser = require('body-parser');
app.listen(port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes');
routes(app);

console.log('todo list RESTful API server started on: ' + port);
