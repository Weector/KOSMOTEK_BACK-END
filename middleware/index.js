const { errorHandler, ctrlWrapper } = require("./api");
const { tokenMiddleware, passwordMW, autoRegisterUser } = require("./user");
const { tokenMiddlewareByOrder } = require("./order/tokenMiddlewareByOrder");

module.exports = {
  errorHandler,
  ctrlWrapper,
  tokenMiddleware,
  passwordMW,
  autoRegisterUser,
  tokenMiddlewareByOrder,
};
