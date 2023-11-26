const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

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

app.listen(port, () => {
  console.log(`Connected server ${port}`);
});
