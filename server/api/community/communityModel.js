const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
  name: {type: string, required: true},
  creationDate: {type: date, default: Date.now}
});


module.exports = mongoose.model('community', communitySchema ) ;
