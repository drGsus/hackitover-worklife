var express = require('express');
var router = express.Router();
var User = require('../models/user.model'); 
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

let adminEmail = 'sergiotorcanin@gmail.com';

//Get All Users
router.get('/', function(req, res, next){
  User.find(function(err, users){
    if (err) {
      return res.status(500).json({
          title: 'An error occurred',
          error: err
      });
    }
    res.status(200).json({
        message: 'Success',
        obj: users
    });
  })
});

//Create New User
router.post('/', function(req, res, next) {
  console.log(req);
  var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)});

        user.save(function(err, result){
          if (err){
            return res.status(500).json({
              title: 'An error occurred',
              error: err
            });
          }
          res.status(201).json({
            message: 'User  created',
            obj: result
          })
        });
});

module.exports = router;
