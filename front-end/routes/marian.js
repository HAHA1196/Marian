var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('123');
});

router.get('/news', function(req, res, next) {
  res.render('marian/news.ejs', {});
});

router.get('/products', function(req, res, next) {
  res.render('marian/products.ejs', {});
});

module.exports = router;
