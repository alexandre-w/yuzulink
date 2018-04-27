const Community = require('./communityModel');
const _ = require('lodash');


exports.param = function(req, res, next, id){
  Community.findById(id)
  .then(function(community){
    if(!community){
      next(new Error('No community for this Id'));
    }else {
      req.community = community;
      next();
    }
  }, function(err){
      next(err);
  });
};

exports.getOne = function(req, res, next){
  let community = req.community ;
  res.json(community);
};

exports.put = function(req, res, next){
  let community = req.community;
  let updateCom = req.body;

  _.merge(community, updateCom);

  community.save(function(err, saved){
    if(err){
      next(err);
    }else {
      res.json(saved);
    }
  });
};


exports.delete = function(req, res, next){
    let community = req.community ;
    community.remove(function(err, removed){
      if(err){
        next(err);
      }else {
        res.json(removed);
      }
    });
};
