const userRouter = require('express').Router();
const baseController = require('../baseController');
const userController = require('./userController');

userRouter.param('id', userController.param);

userRouter.route('/')
  .get(baseController.getAll('user'))
  .post(baseController.post('user'));

userRouter.route('/:id')
  .get(userController.getOne)
  .put(userController.put);

module.exports = userRouter ;
