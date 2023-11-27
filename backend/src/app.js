const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const authRoutes = require("./routes/userAuth");

const app = express();
const port = process.env.PORT || 3001;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Connected server ${port}`);
});
