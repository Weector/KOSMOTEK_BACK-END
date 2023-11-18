const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env")});

const { JWT_SECRET_KEY } = process.env;
if (!JWT_SECRET_KEY) throw new Error("JWT_SECRET_KEY is missing in the .env file");


//..............create token by user.........................
const createToken = async ({ _id }) => {
  const playload = {
    id: _id,
  };

  return jwt.sign(playload, JWT_SECRET_KEY, { expiresIn: "24h" });
};

const createResetPassToken = async ({ _id, email }) => {
  const playload = {
    id: _id,
    email,
  };

  return jwt.sign(playload, JWT_SECRET_KEY, { expiresIn: "5m" });
};

//..............verify token by user.........................
const verifyToken = async (token) => {
  return jwt.verify(token, JWT_SECRET_KEY, { ignoreExpiration: true });
};

module.exports = { createToken, createResetPassToken, verifyToken };
