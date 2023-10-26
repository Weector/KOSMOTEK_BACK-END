const { User } = require("../models/user");


//..............find user in the database....................
const findUserBy = async (data) => {
  return await User.findOne(data);
};

//..............registration user in the database............
const regUser = async (body) => {
  return await User.create(body);
};

//..............login user in the database...................
const login = async ({ _id }, token) => {
  return await User.findByIdAndUpdate(_id, { token });
};


module.exports = { findUserBy, regUser, login };