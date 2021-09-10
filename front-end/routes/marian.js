var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('123');
});

router.get('/news', function(req, res, next) {
  res.render('marian/news.ejs', {});
});

module.exports = router;
