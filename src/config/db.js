const mongoose = require("mongoose");

async function connectDB(){
    mongoose.connect("mongodb://localhost:27017/Notesapp-2")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Connection Error", err));
}

module.exports = connectDB;