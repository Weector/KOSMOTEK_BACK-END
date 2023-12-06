const { ConflictError } = require("../../helpers/errors");
const { findUserBy, regUser, login } = require("../../services/auth");


//......................register user.............................................................
const registerUser = async (req, res) => {
  const { firstname, secondname, birthday, phoneNumber, email, password } = req.body;

  const user = await findUserBy({ email });
  if (user) throw new ConflictError( "Email in use" );

  const inRegUser = await regUser({ firstname, secondname, birthday, phoneNumber, email, password });
  const logUser = await login(inRegUser);

  res.status(201).json({
    token: logUser.token,
    user: {
      firstname,
      secondname,
      birthday,
      phoneNumber,
      email,
      deliveryAddress: logUser.deliveryAddress,
      deliveryCity: logUser.deliveryCity,
      pointPostcode: logUser.pointPostcode,
      userDiscount: logUser.userDiscount,
    },
  });
};

module.exports = { registerUser };
