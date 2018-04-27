const mongoose = require('mongoose');
const keys = require('../../config/keys');
mongoose.connect(keys.mongodb.dbURI);

const postSchema = new mongoose.Schema({
  content: {type: String, required: true },
  communities: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'community',
    required: true
  }],
  creator: {type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true},
  creationDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('post', postSchema);
