const bcrypt = require("bcrypt");
const { Unauthorized } = require("../../helpers/errors");
const { findUserBy, login } = require("../../services/auth");


//....................login user......................................................
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserBy({ email });
  const { firstname, secondname, phoneNumber, userDiscount, deliveryAddress } = user;

  if (!user || !bcrypt.compareSync(password, user.password))
    throw new Unauthorized("Email or password is wrong");

  const logUser = await login(user);

  res.status(200).json({
    token: logUser.token,
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
