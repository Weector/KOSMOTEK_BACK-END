const Joi = require("joi");
const { validateBody } = require("../helpers/validateBody");

//.....................order scheme.........................................
const orderJoiSchema = Joi.object({
  productId: Joi.string().required(),
  volume: Joi.string(),
  shadeName: Joi.string(),
});

//.....................handling addOrder....................................
const addOrder = validateBody(orderJoiSchema);

const orderJoiSchemas = {
  addOrder,
};

module.exports = {
  orderJoiSchemas,
};
