const communityRouter = require('Express').Router();
const baseController = require('../baseController');
const communityController = require('./communityController');

communityRouter.param('id', communityController.param);

communityRouter.route('/')
  .get(baseController.getAll('community'))
  .post(baseController.post('community'));

communityRouter.route('id')
  .get(communityController.getOne)
  .put(communityController.put)
  .delete(communityController.delete);

module.exports = communityRouter ;
