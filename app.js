var express = require('express');
var app = express();
//var cors = require('cors')
var env = require('dotenv').config()
// const router = require('./routes/router')
const mongoose = require("mongoose")
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

var bodyParser = require('body-parser')

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
console.log(process.env.ATLAS_URI, "--string is here--")
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) => {
  app.listen(process.env.PORT || 3002, function () {
    return "Connected to Database"

  })
}).catch((e) => {
  console.log(e, "--error")
})

app.use(require('./routes/router'))
//app.use(cors())