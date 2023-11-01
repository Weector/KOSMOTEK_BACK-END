const {
  createOrder,
  findOrderBy,
  updateOrder,
} = require("../../services/order");


//.......................Creating an order basket and adding products there.....................
const addOrder = async (req, res) => {
  const userId = req.user.id;
  const bodyParam = req.body;

  const order = await findOrderBy({ userId, orderStatus: "" });
  let newOrder;

  if (!order) {
    newOrder = await createOrder({ userId, products: bodyParam });
    
  } else {
    const { _id, products } = order;

    const productIndex = products.findIndex(
      (product) => product.productId.toString() === bodyParam.productId
    );

    productIndex !== -1
      ? (products[productIndex].quantity += 1)
      : products.push(bodyParam);

    newOrder = await updateOrder(_id, order);
  }

  return res.status(200).json(newOrder);
};

module.exports = { addOrder };
