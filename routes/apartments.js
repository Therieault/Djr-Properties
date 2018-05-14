var express = require('express');
var router = express.Router();
var Apartment = require('../models').apartment;

function getBodyParams(req) {
  const {building, address, apartmentNumber, rent, bedrooms, bathrooms, squareFeet, parkingSpaces} = req.body;
  return {
    building,
    address,
    apartmentNumber,
    rent,
    bedrooms,
    bathrooms,
    squareFeet,
    parkingSpaces
  }
}

router.get('/', function(req, res) {
  Apartment.findAll().then(function(apartments) {
    res.send(apartments);
  });
});

router.post('/', function(req,res) {
  Apartment.create(req.body)
  .then(function(apartment){
    res.send(apartment);
  })
});

router.put('/:id', function(req,res) {
  Apartment.findById(req.params.id)
  .then(function(apartment) {
    Apartment.update(getBodyParams(req))
    .then(function(apartment) {
      res.send(apartment);
    });
  })
});

router.delete('/:id', function(req, res) {
  Apartment.findById(req.params.id)
  .then(function(apartment) {
    Apartment.destroy({ where: {
      id: req.params.id }
  }).then(res.send('apartment destroyed'));
  });
});
module.exports = router;
