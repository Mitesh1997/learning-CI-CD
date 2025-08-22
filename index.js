// server.js
const express = require("express");
const app = express();

const PORT = 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Hello, Node.js Server is Running!");
});

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is healthy" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
