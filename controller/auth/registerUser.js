const { ConflictError } = require("../../helpers/errors");
const { findUserBy, regUser, createToken, login } = require("../../services/auth");


const registerUser = async (req, res) => {
  const { firstname, secondname, phoneNumber, deliveryAddress, email, password } = req.body;

  const user = await findUserBy({ email });
  if (user) throw new ConflictError({ message: "Email in use" });

  const inRegUser = await regUser({ firstname, secondname, phoneNumber, deliveryAddress, email, password });

  const token = await createToken(inRegUser);
  const logUser = await login(inRegUser, token);

  res.status(201).json({
    token,
    user: {
      firstname,
      secondname,
      phoneNumber,
      deliveryAddress,
      email,
      userDiscount: logUser.userDiscount,
    },
  });
};

module.exports = { registerUser };
