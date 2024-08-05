// app.js

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./mongo');
const signupRouter = require('./signup');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', signupRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
