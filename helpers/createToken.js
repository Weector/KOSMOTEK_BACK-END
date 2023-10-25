const jwt = require("jsonwebtoken");


//..............create token by user.........................
const createToken = ({ _id }) => {
  const { JWT_SECRET_KEY } = process.env;
  const playload = {
    id: _id,
  };

  return jwt.sign(playload, JWT_SECRET_KEY, { expiresIn: "24h" });
};

module.exports = { createToken };
