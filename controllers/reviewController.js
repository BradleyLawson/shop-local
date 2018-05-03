const db = require("../models");

// Defining methods for the BusinesssController
module.exports = {
  findAll: function(req, res) {
    db.Review
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Review
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Review
      .create(req.body)
      .then(function(dbReview){
        return db.Businesses.findOneAndUpdate({_id: req.body.busId}, { $push: {reviews: dbBlogPost._id}}, {new: true});
      })
      .then(function(dbBusinesses){
        console.log(res.body)
        res.json(dbBusinesses);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Review
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Review
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
