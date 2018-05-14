var express = require('express');
var router = express.Router();
var comment

/* GET home page. */
router.get('/', function(req, res) {
  console.log('hi');
});

router.get('/eaststreet', function(req,res) {
  console.log(' east street main page');
});

router.get('/clintonstreet', function(req,res) {
  console.log('clinton street main page');
});

router.get('/austinstreet', function(req, res) {
  console.log('austin street main page');
});

module.exports = router;
