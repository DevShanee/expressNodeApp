require('dns').setServers(['8.8.8.8', '8.8.4.4']);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.get('/', (req, res) => {    
    })

//connection to mongodb

//Connect to MongDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
        console.error("MongoDB Connection Error: ", error.message);
        process.exit(1);
    });


// Start the server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});