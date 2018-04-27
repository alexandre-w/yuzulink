const _ = require('lodash');

exports.getAll = function(objModel) {
  let model = require('./'+ objModel +'/' + objModel + 'Model')
  return function(req, res, next){
    model.find({})
    .then(function(docs){
      res.json(docs);
    }, function(err){
      next(err);
    });
  };
};

exports.post = function(objModel){
  let model = require('./' + objModel +'/' + objModel +'Model')
  return function(req, res, next){
    let newDocument = req.body ;
    model.create(newDocument)
    .then(function(doc){
      res.json(doc);
    }, function(err){
      next(err);
    });
  };
};
