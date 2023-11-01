const { updateUser } = require("../../services/user");


//...............logout user....................
const logout = async (req, res) => {
  const { id } = req.user;
  await updateUser(id, { token: null });
  res.status(204).json();
};

module.exports = {logout}