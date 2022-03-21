const jwt = require("jsonwebtoken");

class Helper {
  static generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "6h" });
  }
}

module.exports = Helper;
