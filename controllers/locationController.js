"use strict";

const express = require('express')
const app = express.Router()
var LocationSchema = require('../models/location')


// let bodyParser = require('body-parser');

// create application/json parser
// var jsonParser = bodyParser.json()

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })


exports.about = (req, res) => {
  res.send("My Name is Sai Rohith Gorla")
}
exports.show = (req, res) => {
  res.send("My name is Puneeth Annam")
}

exports.create = (req, res) => {
  const location = new LocationSchema({
    locationName: req.body.locationName,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    radius: 100,
  });
  location.save(err => {
    if (err) {
      console.log(err, "---error shiuld be here---")
      let status = err.status || err.statusCode || err.code || 500;
      res.status(status).send({ status, error: err });
    }
    res.send({ status: 200, response: "Location Create Successfully" });
  })
}

exports.findAll = (req, res) => {
  console.log("--this should hit--")
  LocationSchema.find()
    .then(locations => {
      res.send(locations);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Something wrong while retrieving locations."
      });
    });
}


exports.findOne = (req, res) => {
  LocationSchema.findById(req.params.locationId)
    .then(location => {
      if (!location) {
        return res.status(404).send({
          message: "Location not found with id " + req.params.locationId
        });
      }
      res.send(location);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "location not found with id " + req.params.locationId
        });
      }
      return res.status(500).send({
        message: "Something wrong retrieving location with id " + req.params.locationId
      });
    });
}

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Product content can not be empty"
    });
  }

  // Find and update product with the request body
  LocationSchema.findByIdAndUpdate(req.params.productId, {
    locationName: req.body.locationName,
  }, { new: true })
    .then(location => {
      if (!location) {
        return res.status(404).send({
          message: "LocationId not found with id " + req.params.locationId
        });
      }
      res.send(location);
    }).catch(err => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "Product not found with id " + req.params.locationId
        });
      }
      return res.status(500).send({
        message: "Something wrong updating note with id " + req.params.locationId
      });
    });
}

exports.delete = (req, res) => {
  LocationSchema.findByIdAndRemove(req.params.locationId)
    .then(location => {
      if (!location) {
        return res.status(404).send({
          message: "Location not found with id " + req.params.locationId
        });
      }
      res.send({ message: "Location deleted successfully!" });
    }).catch(err => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: "Location not found with id " + req.params.locationId
        });
      }
      return res.status(500).send({
        message: "Could not delete Location with id " + req.params.locationId
      });
    });
}