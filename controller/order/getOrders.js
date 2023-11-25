const { NotFoundError } = require("../../helpers/errors");
const { findOrders } = require("../../services/order");


//................Get all user orders by userId or by orderStatus ..........................
const getOrders = async (req, res) => {
  const userId = req.user.id;
  const { orderStatus } = req.body;

  const searchCriteria = { userId };
  if (orderStatus) searchCriteria.orderStatus = orderStatus;

  const orders = await findOrders(searchCriteria);

  if (!orders) throw new NotFoundError(`You don't have any orders yet`);


  res.status(200).json(orders);
};

module.exports = { getOrders };
