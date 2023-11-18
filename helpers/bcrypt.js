const bcrypt = require("bcrypt");

const hashPassword = async (password) => await bcrypt.hash(password, 10);

const comparePasswords = async (plainPassword, hashedPassword) =>
  await bcrypt.compare(plainPassword, hashedPassword);

module.exports = { hashPassword, comparePasswords };
