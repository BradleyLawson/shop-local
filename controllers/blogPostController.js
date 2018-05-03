const db = require("../models");

// Defining methods for the BusinesssController
module.exports = {
  findAll: function(req, res) {
    db.BlogPost
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.BlogPost
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.BlogPost
      .create(req.body)
      .then(function(dbBlogPost){
        return db.Businesses.findOneAndUpdate({_id: req.body.busId}, { $push: {blogPosts: dbBlogPost._id}}, {new: true});
      })
      .then(function(dbBusinesses){
        console.log(res.body)
        res.json(dbBusinesses);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.BlogPost
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.BlogPost
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
