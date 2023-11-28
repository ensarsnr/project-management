// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// güvenlik için önemli!

const User = require("../models/user");

// Yeni bir kullanıcı kaydet
const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = new User({ username, password });
    await user.save();
    res.json({ message: "Registration successful" });
  } catch (error) {
    console.log(error);
  }
};

// Mevcut bir kullanıcı ile giriş yapın
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Mevcut kullanıcıyı bulmak için kullanılıyor
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    // comparePassword giriş yapmaya çalışan kullanıcının şifresini db de karşılaştırıyor.
    const userPassword = await User.comparePassword({ password });
    if (!userPassword) {
      return res.status(401).json({ message: "Incorrect password" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login };
