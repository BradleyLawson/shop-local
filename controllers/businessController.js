const db = require("../models");

// Defining methods for the BusinesssController
module.exports = {
  findAll: function(req, res) {
    db.Businesses
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Businesses
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.Businesses
      .findOne(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    // console.log('Correct API function');
    db.Businesses
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Businesses
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Businesses
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: function(req, res){
    // console.log(req.body)
    db.Businesses
    .findOne({email: req.body.email})
    .then(function(dbBusinesses){
      console.log("body: " + req.body);
      console.log(dbBusinesses);
      if(!dbBusinesses){
        res.json({message: "Incorrect Email!"})
      } else if (!dbBusinesses.comparePassword(req.body.password)){
        res.json({message: "Incorrect Password!"})
      } else {
        // console.log(res.body)
        //  res.json({id: req.body._id });
        res.json(dbBusinesses)
      }
    })
  }
};
