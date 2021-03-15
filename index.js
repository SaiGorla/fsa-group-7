const express = require('express')
const app = express();
const engines = require('consolidate')
const path = require('path')
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  
  
  
  app.get('/', function(req, res){
      res.render('index.html');
  });


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})