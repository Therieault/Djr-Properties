var express = require('express');
var router = express.Router();
var Application = require('../models').new_application;

router.get('/', function(req, res) {
  console.log('apply info page');
});

router.get('/application', function(req, res) {
  console.log('application form page');
})
router.post('/application', function(req,res) {
  Application.create(req.body)
  .then(res.redirect('/received'))
});

router.get('/application/all', function(req, res) {
  Application.findAll().then(function(applications) {
    res.send(applications);
  });
});

router.get('/received', function(req, res) {
  console.log('application received');
})

module.exports = router;
