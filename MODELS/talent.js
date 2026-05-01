const mongoose = require('mongoose');

// Define the structure of your form data
const TalentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensures no duplicate emails in the database
  },
  talent: {
    type: String,
    required: true
  },
  socialMedia: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically adds the submission date
  }
});

// Export the model so it can be used in API/submit.js
module.exports = mongoose.model('Talent', TalentSchema);