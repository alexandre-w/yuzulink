const postRouter = require('Express').Router();
const baseController = require('../baseController');
const postController = require('./postController');

postRouter.param('id', postController.param);

postRouter.route('/')
  .get(baseController.getAll('post'))
  .post(baseController.post('post'));

postRouter.route('/:id')
  .get(postController.getOne)
  .put(postController.put)
  .delete(postController.delete);

module.exports = postRouter;
