var express = require('express');
var router = express.Router();

// Home page route
router.get('/cycki:id', function(req, res) {
  res.send('Wiki home page');
});

// About page route
router.post('/about', function(req, res) {
  res.send('About this wiki');
});

module.exports = router;