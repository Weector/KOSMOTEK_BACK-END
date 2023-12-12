const { tokenMiddleware } = require("./tokenMiddleware");
const { passwordMW } = require("./schemaMiddleware");
const { autoRegisterUser } = require("./autoRegisterUser");

module.exports = {
  tokenMiddleware,
  passwordMW,
  autoRegisterUser,
};
