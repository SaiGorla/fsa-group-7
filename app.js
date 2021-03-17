var express = require('express');
var app = express();
port = process.env.PORT || 8000
const mongoose = require("mongoose")
app.use(require('./routes/router'))
require('dotenv').config({ path: '.env' });

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) =>{
  app.listen(port, async () => {
    try{
      console.log("Connected to Database")
    }
catch(err){
 console.log(err.message)
}
})
})