const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
});

userSchema.methods.addProject = function (projectId) {
  this.projects.push(projectId);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
