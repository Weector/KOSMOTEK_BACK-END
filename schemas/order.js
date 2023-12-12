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


const updateOrderDataJoiSchema = Joi.object({
  phone: Joi.string().required(),
  email: Joi.string().required(),
  user_comments: Joi.string(),
  admin_comments: Joi.string(),

  currency: Joi.string().required(),
  payment_method: Joi.string().required(),
  payment_method_cod: Joi.string().required(),
  payment_done: Joi.number(),

  delivery_method: Joi.string().required(),
  delivery_price: Joi.number().required(),
  delivery_package_module: Joi.string(),
  delivery_package_nr: Joi.string(),
  delivery_fullname: Joi.string().required(),
  delivery_company: Joi.string(),
  delivery_address: Joi.string().required(),
  delivery_city: Joi.string().required(),
  delivery_state: Joi.string(),
  delivery_postcode: Joi.string().required(),
  delivery_country_code: Joi.string(),
  delivery_point_id: Joi.string(),
  delivery_point_name: Joi.string(),
  delivery_point_address: Joi.string(),
  delivery_point_postcode: Joi.string(),
  delivery_point_city: Joi.string(),

  invoice_fullname: Joi.string(),
  invoice_company: Joi.string(),
  invoice_nip: Joi.string(),
  invoice_address: Joi.string(),
  invoice_city: Joi.string(),
  invoice_state: Joi.string(),
  invoice_postcode: Joi.string(),
  invoice_country_code: Joi.string(),

  want_invoice: Joi.string().valid("0", "1"),
  extra_field_1: Joi.string(),
  extra_field_2: Joi.string(),
  pick_state: Joi.number().valid(0, 1),
  pack_state: Joi.number().valid(0, 1),

  delivery_country: Joi.string(),
  invoice_country: Joi.string(),
});


//.....................handling validate order....................................
const addOrder = validateBody(createOrderJoiSchema);
const quantity = validateBody(updateQuantityJoiSchema);
const remove = validateBody(removeJoiSchema);
const update = validateBody(updateOrderDataJoiSchema);


const orderJoiSchemas = {
  addOrder,
  remove,
  quantity,
  update,
};

module.exports = {
  orderJoiSchemas,
};
