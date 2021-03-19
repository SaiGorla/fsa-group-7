const express = require('express')
const bodyParser = require('body-parser');
const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.render('../public/views/index.ejs')
})

const locationController = require('../controllers/locationController')

 router.get('/location/', locationController.findAll)

 router.get('/location/:locationId', locationController.findOne)

 router.post('/location/', locationController.create)

 router.put('/location/:locationId', locationController.update)

 router.delete('/location/:locationId', locationController.delete)


module.exports = router;
