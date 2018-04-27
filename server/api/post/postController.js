const Post = require('./postModel');
const _ = require('lodash');


exports.param = function(req, res, next, id){
  Post.findById(id)
  .then(function(post){
    if(!post){
      next(new Error('No post for this Id'));
    }else {
      req.post = post;
      next();
    }
  }, function(err){
      next(err);
  });
};

exports.getOne = function(req, res, next){
  let post = req.post;
  res.json(post);

};

exports.put = function(req, res, next){
  // Post from DB
  let post = req.post;
  // New post
  let updatePost = req.body;

  _.merge(post, updatePost);

  post.save(function(err, saved){
    if(err){
      next(err);
    }else {
      res.json(saved);
    }
  });
}

exports.delete = function(req, res, next){
    let post = req.post ;
    post.remove(function(err, removed){
      if(err){
        next(err);
      }else {
        res.json(removed);
      }
    });
};
