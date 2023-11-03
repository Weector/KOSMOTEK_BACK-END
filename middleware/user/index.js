const { tokenMiddleware } = require("./tokenMiddleware");
const { passwordMW } = require("./schemaMiddleware");

module.exports = {
  tokenMiddleware,
  passwordMW,
};
