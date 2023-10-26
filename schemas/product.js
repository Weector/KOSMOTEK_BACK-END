const Joi = require("joi");

const addSchema = Joi.object({
  productName: Joi.string().required(),
  quantity: Joi.number().default(0),
  ean: Joi.string(),
  sku: Joi.string(),
  category: Joi.array().items(Joi.object()).required(),
  brand: Joi.object().required(),
  price: Joi.number().required(),
  productDiscount: Joi.number().default(0),
  purchasePrice: Joi.number().default(Joi.ref("price")),
  taxRate: Joi.number().default(0.23),
  description: Joi.string().required(),
  attributes: Joi.array().items(Joi.object()).required(),
  newOffer: Joi.boolean().default(false),
  images: Joi.object({
    main: Joi.string(),
    extra: Joi.array().items(Joi.string()),
  }).required(),
  variants: Joi.array().items(Joi.string()).default(null),
  averageRating: Joi.number().default(0),
  reviews: Joi.array().items(Joi.object()).default(null),
});

const productJoiSchemas = {
  addSchema,
};

module.exports = {
  productJoiSchemas,
};
