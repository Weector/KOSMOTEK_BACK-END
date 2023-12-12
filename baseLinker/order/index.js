const { createNewOrder } = require("./createNewOrder");
const { getOrders } = require("./getOrders");
const { addOrderProduct } = require("./addOrderProduct");
const { modifyOrderInBaseLinker } = require("./modifyOrderInBaseLinker");
const { setOrderFields } = require("./setOrderFields");

module.exports = {
  createNewOrder,
  getOrders,
  addOrderProduct,
  modifyOrderInBaseLinker,
  setOrderFields,
};
