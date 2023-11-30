const express = require("express");
const { register, login } = require("../controllers/userAuth");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// Kullanıcı kaydı
router.post("/register", register);

// Kullanıcı girişi
router.post("/login", login);

// Token doğrulama middleware'i ile korunan bir route
router.get("/protected", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
