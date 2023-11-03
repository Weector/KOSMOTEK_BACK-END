const { Order } = require("../models");

const findOrders = async (data) => {
  return await Order.find(data);
};

const findNewOrder = async (userId) => {
  return await Order.findOne({ userId, orderStatus: undefined });
};

const createOrder = async (body) => {
  return await Order.create(body);
};

const updateOrder = async (id, body) => {
  return await Order.findByIdAndUpdate(id, body, { new: true });
};

module.exports = { findOrders, createOrder, updateOrder, findNewOrder };
