// db.js
const mongoose = require("mongoose");

const DB_URL =
  "mongodb+srv://adminDb:ILoveMyExBaoBao3214@cluster0.362ps.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database."))
  .catch((err) => {
    console.error("Cannot connect to the database.", err);
    process.exit();
  });

module.exports = mongoose;
