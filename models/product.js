const { Schema, model, SchemaTypes } = require("mongoose");

const productSchema = Schema(
  {
    productName: {
      type: String,
      required: [true, "Set productName"],
    },
    brand: {
      type: SchemaTypes.ObjectId,
      ref: "brand",
    },
    price: {
      type: Number,
      required: [true, "Set price"],
    },
    categoty: {
      type: String,
      required: [true, "Set categoty"],
    },
    subcategoty: {
      type: String,
      required: [true, "Set subcategoty"],
    },
    firstDescription: {
      type: String,
      required: [true, "Set firstDescription"],
    },
    characteristics: {
      type: SchemaTypes.ObjectId,
      ref: "characteristics",
    },
    images: {
      type: SchemaTypes.ObjectId,
      ref: "image",
    },
    stockQuantity: {
      type: Number,
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: SchemaTypes.ObjectId,
      ref: "reviews",
    },
  },
  { versionKey: false }
);

const Product = model("product", productSchema);
module.exports = { Product };
