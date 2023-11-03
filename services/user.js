const { User } = require("../models");


//..............updating user data in the database....................
const updateUser = async (id, body) => {
  return await User.findByIdAndUpdate(id, body, { new: true });
};


module.exports = { updateUser };