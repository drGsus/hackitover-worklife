var express = require('express');
var router = express.Router();
var Activity = require('../models/activity.model'); 
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

//Get All Users
router.get('/', function(req, res, next){
  Activity.find(function(err, activities){
    if (err) {
      return res.status(500).json({
          title: 'An error occurred',
          error: err
      });
    }
    res.status(200).json({
        message: 'Success',
        obj: activities
    });
  })
});

//Create New User
router.post('/', function(req, res, next) {
  var activity = new Activity({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description
      });

      activity.save(function(err, result){
        if (err){
          return res.status(500).json({
            title: 'An error occurred',
            error: err
          });
        }
        res.status(201).json({
          message: 'Activity  created',
          obj: result
        })
      });
});

module.exports = router;
