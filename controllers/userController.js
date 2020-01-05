const db = require("../db/models");

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req, res) {
    console.log("THE USER NBAME QUERYL ", req.query)
    db.User.findOne({"local.username": req.query.name})
        .then(dbUser => {
            console.log("the dbuser isL ", dbUser)
            return res.json(dbUser)     
        })
        .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findByUserId: function(req, res) {
    db.User.find({user: req.params.user_id})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User.findAllAndUpdate({ id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbUser => dbUser.remove())
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findByForumAndTag: function(req,res){
    console.log(req.query);
    if (req.query.tag == "all") {
      db.User.find({forum_id: req.query.forum_id})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
    } else {
    db.User.find({forum_id: req.query.forum_id, tag: req.query.tag})
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(422).json(err));
  }
}
};
