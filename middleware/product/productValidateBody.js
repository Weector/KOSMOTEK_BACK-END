const Joi = require("joi");

const addSchema = Joi.object({
  productName: Joi.string().required(),
  quantity: Joi.number().default(0),
  ean: Joi.string(),
  sku: Joi.string(),
  category: Joi.array()
    .items(
      Joi.object({
        categoryId: Joi.string().required(),
        categoryName: Joi.string().required(),
      })
    )
    .required(),
  brand: Joi.object({
    brandId: Joi.string().required(),
    brandName: Joi.string().required(),
  }).required(),
  price: Joi.number().required(),
  productDiscount: Joi.number().default(0),
  purchasePrice: Joi.number().default(Joi.ref("price")),
  taxRate: Joi.number(),
  description: Joi.string().required(),
  attributes: Joi.array()
    .items(
      Joi.object({
        attribute_names: Joi.string().required(),
        attribute_values: Joi.string().required(),
      })
    )
    .required(),
  newOffer: Joi.boolean().default(false),
  images: Joi.object({
    main: Joi.string().required(),
    extra: Joi.array().items(Joi.string()),
  }),
  variants: Joi.array().items(Joi.string().allow(null)),
  averageRating: Joi.number(),
  reviews: Joi.array().items(
    Joi.object({
      user: Joi.object({
        userId: Joi.string().required(),
        username: Joi.string().required(),
        avatar: Joi.string(),
      }),
      comment: Joi.string().required(),
      rating: Joi.string().required(),
      reviewDate: Joi.date().default(Date.now),
    })
  ),
});

// const addSchema = Joi.object({
//   productName: Joi.string().required(),
//   quantity: Joi.number().default(0),
//   ean: Joi.string(),
//   sku: Joi.string(),
//   category: Joi.array().items(
//     Joi.object({
//       categoryId: Joi.string(),
//       categoryName: Joi.string(),
//     })
//   ),
//   brand: Joi.object({
//     brandId: Joi.string(),
//     brandName: Joi.string(),
//   }),
//   price: Joi.number().required(),
//   productDiscount: Joi.number().default(0),
//   purchasePrice: Joi.number().default(Joi.ref("price")),
//   taxRate: Joi.number(),
//   description: Joi.string().required(),
//   attributes: Joi.array().items(
//     Joi.object({
//       attribute_names: Joi.string(),
//       attribute_values: Joi.string(),
//     })
//   ),
//   newOffer: Joi.boolean().default(false),
//   images: Joi.object({
//     main: Joi.string(),
//     extra: Joi.array().items(Joi.string()),
//   }),
//   variants: Joi.array().items(Joi.string().allow(null)),
// });

console.log(addSchema);
