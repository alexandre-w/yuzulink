const userModel = require('./userModel');
const _ = require('lodash');


exports.param = function(req, res, next, id){
  userModel.findById(id)
  .then(function(user){
    if(!user){
      next(new Error('No user for this Id'));
    }else {
      req.user = user;
      next();
    }
  }, function(err){
      next(err);
  });
};

exports.getOne = function(req, res, next){
  let user = req.user;
  res.json(user);
};

exports.put = function(req, res, next){
  // User from DB
  let user = req.user;
  // New user
  let updateUser = req.body;

  _.merge(user, updateUser);

  user.save(function(err, saved){
    if(err){
      next(err);
    }else {
      res.json(saved);
    }
  });
};
