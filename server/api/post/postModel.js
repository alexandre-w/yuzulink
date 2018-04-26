const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: {type: String, required: true },
  creationDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('post', postSchema);
