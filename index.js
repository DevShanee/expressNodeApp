require('dotenv').config();
require('dns').setServers(['8.8.8.8', '8.8.4.4']);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.get('/', (req, res) => {    
    })

app.use(cors({
  origin: 'https://my-talent-form-app.onrender.com' 
}));
app.use(express.json());

const submitRoute = require('./API/submit');
app.use("/api", submitRoute);

//connection to mongodb


//Connect to MongDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
        console.error("MongoDB Connection Error: ", error.message);
        process.exit(1);
    });


// Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

module.exports = app;