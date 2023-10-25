const { loginValid, registerValid } = require("../validation/auth/authUserValidation");
const { userUpdateValid } = require("../validation/user/userUpdateValidation");

module.exports = {
  loginValid,
  registerValid,
  userUpdateValid,
};
