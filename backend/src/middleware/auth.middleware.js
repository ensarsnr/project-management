const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // Token'ı al
    const tokenHeader = req.headers.authorization;

    if (!tokenHeader || !tokenHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authentication Failed" });
    }

    const token = tokenHeader.replace("Bearer ", "");

    // Token'ı doğrula
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Doğrulanmış kullanıcı bilgilerini req objesine ekle
    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Authentication Failed" });
  }
};
