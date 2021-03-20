"use strict";

var express = require('express')
var router = express.Router();

var locationController = require('../controllers/locationController')


router

router.get('/locations/', locationController.findAll)

router.get('/locations/about', locationController.show)

router.get('/locations/:locationId', locationController.findOne)

router.post('/locations/', locationController.create)

router.put('/locations/:locationId', locationController.update)

router.delete('/locations/:locationId', locationController.delete)



module.exports = router;