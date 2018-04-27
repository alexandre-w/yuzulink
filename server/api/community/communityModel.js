const mongoose = require('mongoose');
const keys = require('../../config/keys');
mongoose.connect(keys.mongodb.dbURI);

const communitySchema = new mongoose.Schema({
  name: {type: String, required: true},
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  creationDate: {type: Date, default: Date.now}
});


module.exports = mongoose.model('community', communitySchema ) ;
