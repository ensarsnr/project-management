const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  description: { type: String, require: true },
  status: {
    type: String,
    enum: ["Completed", "In Progress", "Pending"],
    default: "Pending",
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  dueDate: { type: Date },
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
});

module.exports = mongoose.model("Task", TaskSchema);
