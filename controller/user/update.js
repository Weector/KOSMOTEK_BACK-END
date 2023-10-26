const { WrongParamsError, NotFoundError } = require("../../helpers/errors");
const { updateUser } = require("../../services/user");


//......................updating various user parameters.........................
const update = async (req, res) => {
  const { id } = req.user;
  const bodyParam = req.body;

  if (!bodyParam) throw new WrongParamsError({ message: `Missing field` });

  const user = await updateUser(id, bodyParam);
  if (!user) throw new NotFoundError("User not found");

  const {
    firstname,
    secondname,
    email,
    phoneNumber,
    userDiscount,
    deliveryAddress,
  } = user;

  res.json({
    status: "success",
    message: "User updated",
    user: {
      firstname,
      secondname,
      email,
      phoneNumber,
      userDiscount,
      deliveryAddress,
    },
  });
};

module.exports = { update };
