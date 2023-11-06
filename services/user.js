const { User } = require("../models");


//.....................Find all user .................................
const findUsers = async () => await User.find();

//..............updating user data in the database....................
const updateUser = async (id, body) => {
  return await User.findByIdAndUpdate(id, body, { new: true });
};

module.exports = { updateUser, findUsers };