const { Order } = require("../models");

const findOrders = async (id) => {
  return await Order.find(id);
};

const findOrderBy = async (data) => {
  return await Order.findOne(data);
};

const createOrder = async (body) => {
  return await Order.create(body);
};

const updateOrder = async (id, body) => {
  return await Order.findByIdAndUpdate(id, body, { new: true });
};

module.exports = { findOrders, createOrder, updateOrder, findOrderBy };
