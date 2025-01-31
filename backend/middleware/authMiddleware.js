const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header("Authorization");

  console.log(token);

  if (!token) return res.status(401).json({ message: "Access Denied" });

  console.log(process.env.JWT_SECRET);

  req.user = verified;
  next();
};
