const mongoose = require('mongoose');
const keys = require('./server/config/keys');


mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('connected to MongoDB');
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  creationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('user', userSchema);
