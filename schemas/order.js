const Joi = require("joi");
const { validateBody } = require("../helpers/validateBody");

//.....................order scheme.........................................
const createOrderJoiSchema = Joi.object({
  productId: Joi.string().required(),
  volume: Joi.string(),
  shadeName: Joi.string(),
});

const getOrderJoiSchema = Joi.object({
  orderStatus: Joi.string().valid("in progress", "sent", "delivered"),
});

//.....................handling addOrder....................................
const addOrder = validateBody(createOrderJoiSchema);
const getStatusOrder = validateBody(getOrderJoiSchema);

const orderJoiSchemas = {
  addOrder,
  getStatusOrder,
};

module.exports = {
  orderJoiSchemas,
};
