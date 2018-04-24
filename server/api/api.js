var router = require('express').Router();

// All the routes
router.use('/users' , require('./users/userRouter'));


module.exports = router;
