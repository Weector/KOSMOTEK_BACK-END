const { registerUser } = require("./registerUser");
const { loginUser } = require("./loginUser");
const { forgotPassword } = require("./forgotPassword");
const { resetPassword } = require("./resetPassword");
const { refreshToken } = require("./refreshToken");

module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  refreshToken,
};
