const { deleteProductInOrder, updateOrder } = require("../../services/order");


//................Remove product in order..........................
const removeProduct = async (req, res) => {
  const { orderId } = req.params;
  const { productId } = req.body;
  
  const removeProduct = await deleteProductInOrder(orderId, productId);

  const order = await updateOrder(orderId, removeProduct);

  res.status(200).json(order);
};

module.exports = { removeProduct };
