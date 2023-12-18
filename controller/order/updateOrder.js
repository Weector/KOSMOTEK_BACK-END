const { order: ctrl } = require("../../baseLinker");


//.......................Updating order data to send an order.....................
const updateOrder = async (req, res) => {
  const { order_id } = req.params;
  const bodyParams = req.body;

  const order = await ctrl.setOrderFields({ order_id, ...bodyParams });
  return res.status(200).json(order);
};

module.exports = { updateOrder };
