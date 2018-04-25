const postRouter = require('Express').Router();


postRouter.route('/')
  .get(function(req, res){
    res.send('All the posts')
  });


  module.exports = postRouter;
