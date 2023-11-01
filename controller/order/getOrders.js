const { findOrders } = require("../../services/order");

//................Get all user orders..........................
const getOrders = async (req, res) => {
  const userId = req.user.id;
  const allOrders = await findOrders({ userId });

  res.status(200).json({ allOrders });
};

module.exports = { getOrders };
