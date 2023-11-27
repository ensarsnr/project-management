const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose
      .connect("mongodb://localhost:27017/project-management", {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("Successfully connected to MongoDB");
      })
      .catch((error) => {
        console.log("MongoDB connection error: ", error);
      });
  } catch (error) {
    console.log();
  }
};

module.exports = connectDB;
