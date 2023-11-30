const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.error("MongoDB Connection Error:", err);
      });
  } catch (error) {
    console.log();
  }
};

module.exports = connectDB;
