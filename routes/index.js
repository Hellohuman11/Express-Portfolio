var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' , userName:'Kim' });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' , userName:'Kim'});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' , userName:'Kim'});
});


/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' , userName:'Kim'});
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' , userName:'Kim'});
});





module.exports = router;
