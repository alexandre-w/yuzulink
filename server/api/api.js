var router = require('express').Router();

// All the routes
router.use('/user', require('./user/userRouter'));
router.use('/post', require('./post/postRouter'));
router.use('/community', require('./community/communityRouter'));
router.use('/auth', require('./auth/authRouter'));

module.exports = router;
