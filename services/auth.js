const { User } = require("../models");
const { createToken } = require("../helpers/tokenManagement");

//..............find user in the database....................
const findUserBy = async (data) => {
  return await User.findOne(data);
};

//..............registration user in the database............
const regUser = async (body) => {
  return await User.create(body);
};

//..............login user in the database...................
const login = async ({ _id }) => {
  const token = await createToken(_id);
  return await User.findByIdAndUpdate(_id, { token }, { new: true });
};

module.exports = { findUserBy, regUser, login };
