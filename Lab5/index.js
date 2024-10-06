const express = require("express");
const app = express();
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Middleware to parse JSON request bodies
app.use(express.json());

/*
- Create a new html file named home.html 
- Add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

/*
- Root route for '/'
- Add a route for the root URL to return a welcome message
*/
router.get("/", (req, res) => {
  res.send("<h1>Welcome to the Express App</h1>");
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get("/profile", (req, res) => {
  fs.readFile("user.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading user.json file");
    }
    res.json(JSON.parse(data));
  });
});

/*
- Modify /login route to accept username and password as JSON body parameters
- Read data from user.json file
- If username and password are valid, send response:
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid, send:
    {
        status: false,
        message: "User Name is invalid"
    }
- If password is invalid, send:
    {
        status: false,
        message: "Password is invalid"
    }
*/
// Add a GET route for /login to display a login form
router.get("/login", (req, res) => {
  res.send(`
    <form action="/login" method="post">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <br>
      <button type="submit">Login</button>
    </form>
  `);
});

// POST /login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Received Username:", username);
  console.log("Received Password:", password);

  fs.readFile("user.json", "utf8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ status: false, message: "Error reading user.json file" });
    }

    const user = JSON.parse(data);
    console.log("Expected Username:", user.username);
    console.log("Expected Password:", user.password);

    if (user.username !== username) {
      return res
        .status(401)
        .json({ status: false, message: "User Name is invalid" });
    }

    if (user.password !== password) {
      return res
        .status(401)
        .json({ status: false, message: "Password is invalid" });
    }

    res.json({ status: true, message: "User Is valid" });
  });
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.</b>
*/
router.get("/logout/:username", (req, res) => {
  const username = req.params.username;
  res.send(`<b>${username} successfully logout.</b>`);
});

/*
Add error handling middleware to handle server errors
- Return 500 page with message "Server Error"
*/
app.use((err, req, res, next) => {
  res.status(500).send("Server Error");
});

// Use the router
app.use("/", router);

// Start the server
app.listen(process.env.PORT || 8081, () => {
  console.log("Web Server is listening at port " + (process.env.PORT || 8081));
});
