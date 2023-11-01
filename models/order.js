const { Schema, model, SchemaTypes } = require("mongoose");
const { orderMW } = require("../middleware");

const orderSchema = Schema(
  {
    userId: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
    products: [
      {
        _id: false,
        productId: {
          type: SchemaTypes.ObjectId,
          ref: "product",
        },
        productName: {
          type: String,
        },
        image: {
          type: String,
        },
        volume: {
          type: String,
          default: "",
        },
        shadeName: {
          type: String,
          default: "",
        },
        price: {
          type: Number,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        sum: {
          type: Number,
        },
      },
    ],
    productsQuantity: {
      type: Number,
      default: 1,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
    orderData: {
      type: Date,
      default: new Date(),
    },
    deliveryAddress: {
      type: String,
    },
    orderStatus: {
      type: String,
      enum: ["", "in progress", "sent", "delivered"],
      default: "",
    },
  },
  { versionKey: false }
);

// .................Middleware for update...............
orderMW(orderSchema);

const Order = model("order", orderSchema);
module.exports = { Order };
