const mongoose = require("mongoose");
const Task = require("./task");
const User = require("./user");

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Project", ProjectSchema);
