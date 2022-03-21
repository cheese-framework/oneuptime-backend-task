const Helper = require("../lib/helper");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const token = Helper.generateAccessToken({ username });
    res.json({
      username,
      token,
    });
  } else {
    res.status(400).json({
      status: 400,
      message: "Both username and password is required",
    });
  }
};
