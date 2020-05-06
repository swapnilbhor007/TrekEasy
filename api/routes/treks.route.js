const express = require('express');
const app = express();
const trekRoutes = express.Router();

// Require treks model in our routes module
let Treks = require('../models/treks');

// Defined store route
trekRoutes.route('/add').post(function (req, res) {
  let treks = new Treks(req.body);
  treks.save()
    .then(treks => {
      res.status(200).json({'treks': 'treks in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
trekRoutes.route('/').get(function (req, res) {
    Treks.find(function (err, treks){
    if(err){
      console.log(err);
    }
    else {
      res.json(treks);
    }
  });
});

// Defined edit route
trekRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Treks.findById(id, function (err, Treks){
      res.json(Treks);
  });
});

//  Defined update route
trekRoutes.route('/update/:id').post(function (req, res) {
    Treks.findById(req.params.id, function(err, next, treks) {
    if (!treks)
      return next(new Error('Could not load Document'));
    else {
        treks.name = req.body.name;
        treks.location = req.body.location;
        treks.level = req.body.level;
        treks.imageURL = req.body.imageURL;
        treks.rating = req.body.rating;
        treks.price = req.body.price;

        treks.save().then(treks => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
trekRoutes.route('/delete/:id').get(function (req, res) {
    Treks.findByIdAndRemove({_id: req.params.id}, function(err, treks){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = trekRoutes;