// Require express module
const express = require("express");
require('dotenv').config();

// Create an Express application
const app = express();

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send({
    hey: "guys",
    welcome: "back",
    to: "another",
    video: "",
    please: "rate us 10/10",
  });
});

// Start the Express server
app.listen(process.env.PORT || 5001, () => {
  console.log('Server is running on port ' + (process.env.PORT || 5001));
});
