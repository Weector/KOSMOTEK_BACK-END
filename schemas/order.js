const Joi = require("joi");
const { validateBody } = require("../helpers/validateBody");

//.....................order scheme.........................................
const createOrderJoiSchema = Joi.object({
  order_id: Joi.number(),
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

const updateQuantityJoiSchema = Joi.object({
  order_id: Joi.number().required(),
  order_product_id: Joi.number().required(),
  quantity: Joi.number().required(),
});

const removeJoiSchema = Joi.object({
  order_product_id: Joi.number().required(),
});


//.....................handling validate order....................................
const addOrder = validateBody(createOrderJoiSchema);
const quantity = validateBody(updateQuantityJoiSchema);
const remove = validateBody(removeJoiSchema);


const orderJoiSchemas = {
  addOrder,
  remove,
  quantity,
};

module.exports = {
  orderJoiSchemas,
};
