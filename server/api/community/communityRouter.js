const communityRouter = require('Express').Router();

communityRouter.route('/')
  .get(function(req, res){
    res.send('All the community');
  });


module.exports = communityRouter ;
