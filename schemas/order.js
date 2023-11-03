const Joi = require("joi");
const { validateBody } = require("../helpers/validateBody");

//.....................order scheme.........................................
const createOrderJoiSchema = Joi.object({
  productId: Joi.string().required("ProductId required"),
  quantity: Joi.number().required("Quantity required"),
  volume: Joi.string(),
  shadeName: Joi.string(),
});

const getOrderJoiSchema = Joi.object({
  orderStatus: Joi.string().valid("in progress", "sent", "delivered"),
});

const removeJoiSchema = Joi.object({
  productId: Joi.string().required(),
});

//.....................handling validate order....................................
const addOrder = validateBody(createOrderJoiSchema);
const getStatusOrder = validateBody(getOrderJoiSchema);
const remove = validateBody(removeJoiSchema);

const orderJoiSchemas = {
  addOrder,
  getStatusOrder,
  remove,
};

module.exports = {
  orderJoiSchemas,
};
