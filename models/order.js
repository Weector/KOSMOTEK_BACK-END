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
          required: [true],
        },
        productName: {
          type: String,
        },
        image: {
          type: String,
        },
        volume: {
          type: String,
          default: null,
        },
        shadeName: {
          type: String,
          default: null,
        },
        price: {
          type: Number,
        },
        quantity: {
          type: Number,
          required: [true, "Quantity required"],
        },
        sum: {
          type: Number,
        },
      },
    ],
    productsQuantity: {
      type: Number,
    },
    totalPrice: {
      type: Number,
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
      enum: [null, "in progress", "sent", "delivered"],
      default: null
    },
  },
  { versionKey: false }
);

// .................Middleware for update...............
orderMW(orderSchema);

const Order = model("order", orderSchema);
module.exports = { Order };
