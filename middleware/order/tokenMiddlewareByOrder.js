const jwt = require("jsonwebtoken");

const tokenMiddlewareByOrder = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  try {
    if (bearer === "Bearer" && token) {
      const { id } = jwt.decode(token, process.env.JWT_SECRET_KEY);

      const { User } = require("../../models");
      const user = await User.findById(id);

      if (user && user.token) req.user = user;
    }
  } catch (e) {
    next();
  }
  next();
};

module.exports = { tokenMiddlewareByOrder };
