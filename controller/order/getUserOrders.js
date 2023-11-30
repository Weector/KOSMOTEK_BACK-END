const { order: ctrl } = require("../../baseLinker");
const { NotFoundError } = require("../../helpers/errors");

//................Get all user orders by userId or by orderStatus ..........................
const getUserOrders = async (req, res) => {
  const filter_email = req.user.email;

  const { orders } = await ctrl.getOrders({ filter_email });
  if (!orders.length) throw new NotFoundError(`You don't have any orders yet`);

  res.status(200).json(orders);
};

module.exports = { getUserOrders };
  