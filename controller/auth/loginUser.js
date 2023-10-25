const bcrypt = require("bcrypt");
const { Unauthorized } = require("../../helpers/errors");
const { findUserBy, createToken, login } = require("../../services/auth");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserBy({ email });
  const { firstname, secondname, phoneNumber, userDiscount, deliveryAddress } = user;

  if (!user || !bcrypt.compareSync(password, user.password))
    throw new Unauthorized("Email or password is wrong");

  const token = await createToken(user);
  await login(user, token);

  res.status(200).json({
    token,
    user: {
      firstname,
      secondname,
      phoneNumber,
      deliveryAddress,
      email,
      userDiscount,
    },
  });
};

module.exports = { loginUser };
