'use strict'

const express = require('express');
const app     = express();
const file = require('file-system');
var fs = require('fs');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const port    = process.env.PORT || 3000;
// const fs = require("fs");
// const path = require('path');

var db = require('./models');	

var content;


app.set('views', __dirname);
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');


fs.readFile('./game', "utf-8", function (err, data) {
   if (err) {
      throw err;
   }

   content = data.toString();

   console.log(content);
   processFile();
});

function processFile() {
	console.log(content);
}


// app.get('/', function(req, res) {
//   res.send("You're Home!");
// });


// start server
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});