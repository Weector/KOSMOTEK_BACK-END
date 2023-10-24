const bcrypt = require("bcrypt");
const { Unauthorized } = require("../../helpers/errors");
const { findUserBy, createToken, login } = require("../../services/auth");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserBy({ email });
  const { username, phoneNumber, userDiscount, deliveryAddress, avatar } = user;

  if (!user || !bcrypt.compareSync(password, user.password))
    throw new Unauthorized("Email or password is wrong");

  const token = await createToken(user);
  await login(user, token);

  res.status(200).json({
    token,
    user: {
      username,
      phoneNumber,
      deliveryAddress,
      email,
      userDiscount,
      avatar,
    },
  });
};

module.exports = { loginUser };
