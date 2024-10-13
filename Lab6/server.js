// server.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./db"); // Import MongoDB connection
const noteRoutes = require("./routes/NoteRoutes"); // Import Note routes

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", noteRoutes); // Use the note routes under the /api prefix

// Root endpoint
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Note Taking Application</h1>");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something broke!" });
});

// Set up the server to listen on a specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
