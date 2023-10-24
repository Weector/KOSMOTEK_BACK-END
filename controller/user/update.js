const { WrongParamsError, NotFoundError } = require("../../helpers/errors");
const { updateUser } = require("../../services/user");

const update = async (req, res) => {
  const { id } = req.user;
  const bodyParam = req.body;

  if (!bodyParam) throw new WrongParamsError({ message: `Missing field` });

  const user = await updateUser(id, bodyParam);
  if (!user) throw new NotFoundError("User not found");

  const {
    username,
    email,
    phoneNumber,
    userDiscount,
    deliveryAddress,
    avatar,
  } = user;

  res.json({
    status: "success",
    message: "User updated",
    user: {
      username,
      email,
      phoneNumber,
      userDiscount,
      deliveryAddress,
      avatar,
    },
  });
};

module.exports = { update };
