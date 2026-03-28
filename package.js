const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Predict API
app.get("/predict", (req, res) => {
  res.json({
    expected_wait: 60
  });
});

// IMPORTANT PORT FIX
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
