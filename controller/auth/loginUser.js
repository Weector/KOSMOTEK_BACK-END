const { Unauthorized } = require("../../helpers/errors");
const { findUserBy, login } = require("../../services/auth");
const { comparePasswords } = require("../../helpers/bcrypt");

//....................login user......................................................
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserBy({ email });
  const {
    firstname,
    secondname,
    phoneNumber,
    userDiscount,
    deliveryAddress,
    birthday,
  } = user;

  const passwordMatches = await comparePasswords(password, user.password);
  if (!user || !passwordMatches)
    throw new Unauthorized("Email or password is wrong");

  const logUser = await login(user);

  res.status(200).json({
    token: logUser.token,
    user: {
      firstname,
      secondname,
      phoneNumber,
      birthday,
      deliveryAddress,
      email,
      userDiscount,
    },
  });
};

module.exports = { loginUser };
