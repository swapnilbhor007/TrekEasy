const express = require('express');
const schedulesRoutes = express.Router();

// Require schedules model in our routes module
let Schedules = require('../models/schedules');

// Defined get data(index or listing) route
schedulesRoutes.route('/').get(function (req, res) {
    Schedules.find(function (err, schedules){
    if(err){
      console.log(err);
    }
    else {
      res.json(schedules);
    }
  });
});

module.exports = schedulesRoutes;
