const express = require("express");
const router = express.Router();
const TalentModel = require('../MODELS/talent');


router.post('/submit', async (req, res) => {
  try {
    const newEntry = new TalentModel(req.body);
    await newEntry.save(); // This is the line that writes to the database
    
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database Error", error });
  }
});

module.exports = router;