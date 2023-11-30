const express = require("express");
const { createProject } = require("../controllers/project");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// Giriş yapmış kullanıcıya özel işlemler
router.post("/create-project", authMiddleware, createProject);

module.exports = router;
