const express = require('express')
const app = express();
const engines = require('consolidate')
const path = require('path')
const bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.engine('ejs', engines.ejs)
app.set('views', path.join(__dirname, './views'))


const router = require('./routes/router')
app.use('/', router)
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(express.static(__dirname + '/public/'));


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})