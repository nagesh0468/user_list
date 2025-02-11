const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Load JSON data
app.get("/data", (req, res) => {
  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading JSON file" });
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
