"use strict";

var express = require('express')
var router = express.Router();

var locationController = require('../controllers/locationController')


router

router.get('/location/', locationController.findAll)

router.get('/location/about', locationController.show)

router.get('/location/:locationId', locationController.findOne)

router.post('/location/', locationController.create)

router.put('/location/:locationId', locationController.update)

router.delete('/location/:locationId', locationController.delete)



module.exports = router;