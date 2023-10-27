const jwt = require("jsonwebtoken");


//..............create token by user.........................
const createToken = ({ _id }) => {
  const { JWT_SECRET_KEY } = process.env;
  const playload = {
    id: _id,
  };

  return jwt.sign(playload, JWT_SECRET_KEY, { expiresIn: "24h" });
};

const createResetPassToken = ({ _id, email }) => {
  const { JWT_SECRET_KEY } = process.env;
  const playload = {
    id: _id,
    email,
  };

  return jwt.sign(playload, JWT_SECRET_KEY, { expiresIn: "5m"});
};


module.exports = { createToken, createResetPassToken };
