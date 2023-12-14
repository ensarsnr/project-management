const express = require("express");
const {
  createProject,
  addUser,
  getProjects,
  deletedProject,
} = require("../controllers/project");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// Giriş yapmış kullanıcıya özel işlemler
router.post("/create-project", authMiddleware, createProject);
router.post("/add-user", addUser);
router.get("/get-projects", authMiddleware, getProjects);
router.post("/delete-project", authMiddleware, deletedProject);

module.exports = router;
