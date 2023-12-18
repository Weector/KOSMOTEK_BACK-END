const { addOrder } = require("./addOrder");
const { getUserOrders } = require("./getUserOrders");
const { removeProduct } = require("./removeProduct");
const { updateQuantity } = require("./updateQuantity");
const { updateOrder } = require("./updateOrder");

module.exports = {
  addOrder,
  getUserOrders,
  removeProduct,
  updateQuantity,
  updateOrder,
};
