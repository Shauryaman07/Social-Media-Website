const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },  // Example: Required field for first name
  lastName: { type: String, required: true },   // Example: Required field for last name
  username: { type: String, unique: true, required: true },  // Example: Unique and required username
  password: { type: String, required: true }, // Example: Required field for password
  followings: { type: Number, default: 0 },
  followers: { type: Number, default: 0 },
  followersList: [{ type: String, default: 0 }]
});

module.exports = mongoose.model('User', userSchema);