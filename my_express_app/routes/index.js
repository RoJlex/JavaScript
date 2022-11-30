var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Карамельки */
router.get('/Priora', function(req, res, next) {
  res.send("<h1>Страница Приоры</h1>")
});


module.exports = router;
