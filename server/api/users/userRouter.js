const _ = require('lodash');
const userRouter = require ('express').Router();

userRouter.param('id', function(req, res, next, id){
  let user = _.find(users , {id: id});

  if(user){
    req.user = user;
    next();
  }else {
    res.send();
  }
});

var users = [];
var id = 0;

const updateId = function(req, res, next){
  id++;
  req.body.id = id + '';
  next();
}


userRouter.route('/')
  .get(function(req, res){
      res.json(users);
  })
  .post(updateId, function(req, res){
    let user = req.body;
    users.push(user);
    res.json(user);
  });

userRouter.route('/:id')
  .get(function(req, res){
    let user = req.user;
    res.json(user);
  })
  .put(function(req, res) {
    let update = req.body ;
    if(update.id){
      delete update.id ;
    }

    let user = _.findIndex(users, {id: req.params.id});
    if(!users[user]){
      res.send();
    } else {
      let updatedUser = _.assign(users[user], update);
      res.json(updatedUser);
    }
  });

// userRouter.delete('/users/:id', function(req, res){
//   let user = _.findIndex(users, {id: req.params.id});
//
//   if(!users[user]){
//     res.send();
//   } else {
//     var deletedUser = users[user];
//     users.splice(user, 1);
//     res.send(deletedUser);
//   }
// });


module.exports = userRouter ;
