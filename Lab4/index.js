const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Allows us to set the port

app.use(express.json());

// GET /hello:
app.get("/hello", (req, res) => {
  res.send("Hello Express JS");
});

// GET /user:
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Mars";
  const lastname = req.query.lastname || "Sultan";
  res.json({ firstname, lastname });
});

// POST /user:
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// To run the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
