var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sounovo', { title: 'Sou novo(a) por aqui' });
});

module.exports = router;
