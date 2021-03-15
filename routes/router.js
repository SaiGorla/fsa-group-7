const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.render('../views/index.html')
})

module.exports = router;