const express = require("express");
const router = express.Router();

router.post('/submit', (req, res) => {
    const {name, age, email, talent} = req.body;

    console.log("Received data:", {name, age, email, talent});

    res.status(200).json({message: "Form submitted successfully"});


});

module.exports = router;