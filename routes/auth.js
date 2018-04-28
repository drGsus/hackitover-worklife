var express = require('express');
var router = express.Router();
var User = require('../models/user.model'); 
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

let adminEmail = 'sergiotorcanin@gmail.com';

router.post('/signin', function(req, res, next){
  User.findOne({email: req.body.email}, function(err, user){
    if (err){
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!user){
      return res.status(401).json({
        title: 'An error occurred',
        error: {message: 'Login failed'}
      });
    }
    if(!bcrypt.compareSync(req.body.password, user.password)){
      return res.status(401).json({
        title: 'An error occurred',
        error: {message: 'Login failed'}
      });
    }
    var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
    res.status(200).json({
      message: 'Successfully Logged In',
      token: token,
      userId: user._id,
      email: user.email
    });
  })
});

module.exports = router;
