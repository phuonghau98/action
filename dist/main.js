"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send({ success: 1 }).end();
});
app.listen(3000, function () {
    console.log('Server is listening on port 3000');
});
