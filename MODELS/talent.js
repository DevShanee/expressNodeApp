const mongoose = require('mongoose');

// This defines the structure of your data in MongoDB
const talentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    talent: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// This creates the collection named "talents" in your database
module.exports = mongoose.model('Talent', talentSchema);