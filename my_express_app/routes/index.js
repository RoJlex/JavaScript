var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница Приоры */
router.get('/Priora', function(req, res, next) {
  res.send("<h1>Страница Приоры</h1>")
});
/* Страница Весты */
router.get('/Vesta', function(req, res, next) {
  res.send("<h1>Страница Весты</h1>")
});

/* Страница Гранты */
router.get('/Granta', function(req, res, next) {
  res.send("<h1>Страница Гранты</h1>")
});

/* Страница Калины */
router.get('/Kalina', function(req, res, next) {
  res.send("<h1>Страница Калины</h1>")
});



module.exports = router;
