const mongoose = require('mongoose');
const keys = require('../../config/keys');
mongoose.connect(keys.mongodb.dbURI);

const userSchema = new mongoose.Schema({
  googleId: {type: String, required: false},
  name: { type: String, required: true },
  password: { type: String, required: false},
  email: { type: String, required: false, unique: true },
  communities: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'community'
  }],
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('user', userSchema);
