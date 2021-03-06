var express = require('express');
var router = express.Router();
var user = require('../database').user;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '大众聊天室' });
});
router.get('/room/:id', function(req, res, next) {
  res.render('index', { title: '房间 /  ' + req.params.id });
});
router.get('/user', function(req, res, next) {
  res.render('userList', { title: req.params.id });
});
router.get('/user/:id', function(req, res, next) {
  res.render('userCenter', { title: req.params.id });
});
router.get('/user/:id/register', function(req, res, next) {
  res.send({status: "success"});
});
router.get('/user/:id/login', function(req, res, next) {
  res.send({status: "success"});
});
router.get('/user/:id/logout', function(req, res, next) {
  res.send({status: "success"});
});
router.get('/user/:id/info', function(req, res, next) {
  res.send({user: "admin"});
});

module.exports = router;
