const { User } = require("../models");


//..............logout user in the database...........................
const logoutUser = async (id, token) => {
  return await User.findByIdAndUpdate(id, token);
};

//..............updating user data in the database....................
const updateUser = async (id, body) => {
  return await User.findByIdAndUpdate(id, body, { new: true });
};


module.exports = { logoutUser, updateUser };