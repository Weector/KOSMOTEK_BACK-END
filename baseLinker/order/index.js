const { createNewOrder } = require("./createNewOrder");
const { getOrders } = require("./getOrders");
const { addOrderProduct } = require("./addOrderProduct");
const { setOrderProductFields } = require("./setOrderProductFields");
const { deleteOrderProduct } = require("./deleteOrderProduct");

module.exports = {
  createNewOrder,
  getOrders,
  addOrderProduct,
  setOrderProductFields,
  deleteOrderProduct,
};
