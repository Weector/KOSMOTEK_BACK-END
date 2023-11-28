const { order: ctrl } = require("../../baseLinker");

//.......................Creating an order basket and adding products there.....................
const addOrder = async (req, res) => {
  const bodyParams = req.body;

  let newOrder;

  !bodyParams.order_id
    ? (newOrder = await ctrl.createNewOrder(bodyParams))
    : (newOrder = await ctrl.addOrderProduct(bodyParams));

  return res.status(200).json(newOrder);
};

module.exports = { addOrder };
