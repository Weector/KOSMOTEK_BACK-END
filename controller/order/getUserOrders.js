// const { order: ctrl } = require("../../baseLinker");
// const { NotFoundError } = require("../../helpers/errors");
// const { findOrders } = require("../../services/order");

//................Get all user orders by userId or by orderStatus ..........................
const getUserOrders = async (req, res) => {
  // const { email } = req.user;
  // const { orderStatus } = req.body;

  // const searchCriteria = { userId };
  // if (orderStatus) searchCriteria.orderStatus = orderStatus;

  // const orders = await ctrl.getOrders({ email });
  // const orders = await findOrders(searchCriteria);

  // if (!orders) throw new NotFoundError(`You don't have any orders yet`);


  res.status(200).json();
};

module.exports = { getUserOrders };
