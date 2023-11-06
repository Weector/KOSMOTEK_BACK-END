const { Order } = require("../models");

const findOrders = async (data) => {
  return await Order.find(data);
};

const findOneOrder = async (data) => {
  return await Order.findOne(data);
};

const createOrder = async (body) => {
  return await Order.create(body);
};

const updateOrder = async (id, body) => {
  return await Order.findByIdAndUpdate(id, body, { new: true });
};

const deleteProductInOrder = async (_id, productId) => {
  return await Order.findByIdAndUpdate(
    _id,
    { $pull: { products: { productId } } },
    { new: true }
  );
};

module.exports = {
  findOrders,
  createOrder,
  updateOrder,
  findOneOrder,
  deleteProductInOrder,
};
