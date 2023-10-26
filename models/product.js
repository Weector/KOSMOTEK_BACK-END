const { Schema, model } = require("mongoose");

const { errorHandler } = require("../middleware");

const productSchema = Schema(
  {
    productName: {
      type: String,
      required: [true, "Set productName"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    ean: String,
    sku: String,
    category: {
      type: [Object],
      required: [true, "Add product category"],
      ref: "category",
    },
    brand: {
      type: Object,
      required: [true, "Add product brand"],
      ref: "brand",
    },
    price: {
      type: Number,
      required: [true, "Set price"],
    },
    productDiscount: {
      type: Number,
      default: 0,
    },
    purchasePrice: {
      type: Number,
      default: function () {
        return this.price;
      },
    },
    taxRate: {
      type: Number,
      default: 0.23,
    },
    description: {
      type: String,
      required: [true, "Set description"],
    },
    attributes: {
      type: [Object],
      required: [true, "Set attributeName and attributeValue"],
    },
    newOffer: {
      type: Boolean,
      default: false,
    },
    images: {
      main: {
        type: String,
        required: [true, "Set main picture"],
      },
      extra: [String],
    },
    variants: {
      type: [String],
      default: null,
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
  { versionKey: false }
);

productSchema.post("save", errorHandler);

const Product = model("product", productSchema);

module.exports = {
  Product,
};
