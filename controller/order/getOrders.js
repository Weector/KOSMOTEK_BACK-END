const { findOrders } = require("../../services/order");

//................Get all user orders..........................
const getOrders = async (req, res) => {
  const userId = req.user.id;
  const { orderStatus } = req.body;

  const searchCriteria = { userId };
  if (orderStatus) searchCriteria.orderStatus = orderStatus;

  const allOrders = await findOrders(searchCriteria);

  res.status(200).json({ allOrders });
};

module.exports = { getOrders };
