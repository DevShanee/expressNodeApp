require('dotenv').config(); // 1. Load env first

require('dns').setServers(['8.8.8.8', '8.8.4.4']);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// 2. Middleware (Must be before routes)
app.use(cors({
  origin: 'https://my-talent-form-app.onrender.com' 
}));
app.use(express.json());

// 3. Root Route - Critical for Render health checks
app.get('/', (req, res) => { 
    res.status(200).send("Backend is successfully running!");
});

// 4. API Routes
const submitRoute = require('./API/submit');
app.use("/api", submitRoute);

// 5. Connect to MongoDB[cite: 2]
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
        console.error("MongoDB Connection Error: ", error.message);
        // Removed process.exit to allow Render to show logs instead of loop-crashing[cite: 2]
    });

// 6. Start the server[cite: 2]
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;