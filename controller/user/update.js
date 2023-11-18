const { comparePasswords } = require("../../helpers/bcrypt");
const {
  WrongParamsError,
  NotFoundError,
  Unauthorized,
} = require("../../helpers/errors");
const { updateUser } = require("../../services/user");

//......................updating various user parameters.........................
const update = async (req, res) => {
  const { id, password } = req.user;
  const bodyParams = req.body;
  let user;

  if (!bodyParams) throw new WrongParamsError(`Missing field`);

  const { oldPassword, newPassword, ...otherParams } = bodyParams;

  if (oldPassword || newPassword) {
    const passwordMatches = await comparePasswords(oldPassword, password);

    if (!passwordMatches) throw new Unauthorized("Invalid old password");

    user = await updateUser(id, {
      ...otherParams,
      password: newPassword,
    });
  } else {
    user = await updateUser(id, otherParams);
  }

  if (!user) throw new NotFoundError("User not found");

  const {
    firstname,
    secondname,
    email,
    birthday,
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
      birthday,
      phoneNumber,
      userDiscount,
      deliveryAddress,
    },
  });
};

module.exports = { update };
