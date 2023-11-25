const Joi = require("joi");
const { validateBody } = require("../helpers/validateBody");

//.....................order scheme.........................................
const createOrderJoiSchema = Joi.object({
  order_id: Joi.string(),
  products: Joi.array()
    .items(
      Joi.object({
        product_id: Joi.string().required("Product_id required"),
        quantity: Joi.number().required("Quantity required"),
        variant_id: Joi.string().allow(""),
        location: Joi.string().allow(""),
        attributes: Joi.string().allow(""),
        ean: Joi.string().required("ean required"),
        sku: Joi.string().required("sku required"),
        name: Joi.string().required("name required"),
        price_brutto: Joi.number().required("price_brutto required"),
        tax_rate: Joi.number().required("tax_rate required"),
        weight: Joi.number().required("weight required"),
      })
    )
    .required(),
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
