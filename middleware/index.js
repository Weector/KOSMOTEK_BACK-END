const { errorHandler } = require("./api/errorHandler");
const { ctrlWrapper } = require("./api/ctrlWrapper");
const { authMiddleware } = require("./auth/authMiddleware");
const { loginValid, registerValid } = require("./auth/authUserValidation");
const { userUpdateValid } = require("./user/userUpdateValidation");

module.exports = {
  errorHandler,
  ctrlWrapper,
  authMiddleware,
  loginValid,
  registerValid,
  userUpdateValid,
};
