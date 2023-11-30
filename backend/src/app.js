const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const dotenv = require("dotenv");

//routes
const authRoutes = require("./routes/userAuth");
const projectRoutes = require("./routes/project");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

connectDB();

app.use(cors());
app.use(express.json());

// Endpoinler
app.use("/auth", authRoutes);
app.use("/project", projectRoutes);

app.listen(port, () => {
  console.log(`Connected server ${port}`);
});
