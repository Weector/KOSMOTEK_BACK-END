const jwt = require("jsonwebtoken");
const { findUserBy } = require("../../services/auth");
const { Unauthorized, Forbidden } = require("../../helpers/errors");
const { updateUser } = require("../../services/user");


//....................reset password............................................
const resetPassword = async (req, res) => {
  const { id, token } = req.params;
  const bodyParam = req.body;
  const { JWT_SECRET_KEY } = process.env;

  const user = await findUserBy({ _id: id });
  if (!user) throw new Unauthorized(`User not exists!` );


  try {
    jwt.verify(token, JWT_SECRET_KEY);
  } catch (error) {
    throw new Forbidden( `Invalid token` );
  }

  await updateUser(id, bodyParam);

  res.status(201).json({
    message: `New password created!`,
  });
};

module.exports = { resetPassword };
