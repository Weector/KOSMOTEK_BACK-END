const { ConflictError } = require("../../helpers/errors");
const { findUserBy, regUser, login } = require("../../services/auth");
const { createToken } = require("../../helpers/createToken");


//......................register user.............................................................
const registerUser = async (req, res) => {
  const { firstname, secondname, birthday, phoneNumber, email, password } = req.body;

  const user = await findUserBy({ email });
  if (user) throw new ConflictError({ message: "Email in use" });

  const inRegUser = await regUser({ firstname, secondname, birthday, phoneNumber, email, password });

  const token = await createToken(inRegUser);
  const logUser = await login(inRegUser, token);

  res.status(201).json({
    token,
    user: {
      firstname,
      secondname,
      birthday,
      phoneNumber,
      email,
      deliveryAddress: logUser.deliveryAddress,
      userDiscount: logUser.userDiscount,
    },
  });
};

module.exports = { registerUser };
