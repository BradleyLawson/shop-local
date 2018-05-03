const db = require("../models");

// Defining methods for the BusinesssController
module.exports = {
  findAll: function(req, res) {
    console.log("line 6correct API function")
    console.log("line 7" + req.body)
    console.log("line 8" + req.body.businessZip)
    console.log("line 10" + req.body.businessCategory)
    console.log("line 11" + res.body)
    console.log("line 12" + req.query)
    db.Businesses
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Businesses
      .findById(req.params.id)
      .populate('blogPosts')
      .populate('reviews')
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
  search: function(req, res){
    console.log("line 46" + req.body)
    console.log("line 47" + req.body.businessZip)
    db.Businesses
    .find(req.query)
    .then(function(dbBusinesses){
      console.log("line 57" + dbBusinesses);
      res.json(dbBusinesses);
      res.send(dbBusiness);
    })
  }, 
  login: function(req, res){
    // console.log(req.body)
    db.Businesses
    .findOne({email: req.body.email})
    .then(function(dbBusinesses){
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
  },
  searchForBusinesses: function(req, res) {
    console.log(req.body)
    db.Businesses
      .find({businessZip: req.body.businessZip, businessCategory: req.body.businessCategory})
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  }
}