var express = require('express');
var app = express();
var port = 3000;
const mongoose = require("mongoose")
app.use(require('./routes/router'))

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://Sai:<S538416>@cluster0.gdkck.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true }).then((res) =>{
  app.listen(3000, function () {
  return "Connected to Database"
  
})
}).catch((e) => {
 console.log(e,"--error")
})
