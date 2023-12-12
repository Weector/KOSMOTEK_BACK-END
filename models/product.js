const { Schema, model } = require("mongoose");

const { errorHandler } = require("../middleware");

const productSchema = Schema(
  {
    blProductId: {
      type: String,
      required: [true, "Set baselinker product_id"],
    },
    productName: {
      type: String,
      required: [true, "Set baselinker name"],
    },
    quantity: {
      type: Number,
      required: [true, "Set baselinker quantity"],
    },
    price: {
      type: Number,
      required: [true, "Set baselinker price"],
    },
    discountPrice: {
      type: Number,
      default: 0,
    },
    categoryId: {
      type: String,
      required: [true, "Set baselinker category_id"],
    },
    brand: {
      type: String,
      required: [true, "Set baselinker man_name"],
    },
    images: {
      type: [String],
      required: [true, "Set baselinker images"],
    },
    attributes: {
      type: [Object],
      required: [true, "Set baselinker features"],
    },
    variants: {
      type: Array,
      required: [true, "Set baselinker variants"],
    },
    description: {
      type: String,
      required: [true, "Set baselinker description"],
    },
    descriptionExtra: {
      type: Array,
      required: [true, "Set baselinker description_extra"],
    },
    newOffer: {
      type: Boolean,
      default: false,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: [Object],
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.post("save", errorHandler);

const Product = model("product", productSchema);

module.exports = {
  Product,
};
