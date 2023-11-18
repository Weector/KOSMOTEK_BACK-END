const { verifyToken } = require("../../helpers/tokenManagement");
const { login } = require("../../services/auth");
const { Unauthorized } = require("../../helpers/errors");


const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) throw new Unauthorized("Refresh token is missing");

  const decoded = await verifyToken(refreshToken);
  const newAccess = await login({ _id: decoded.id });

  res.json({ accessToken: newAccess.token });
};

module.exports = { refreshToken };
