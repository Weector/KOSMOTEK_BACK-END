const { Schema, model } = require("mongoose");
const { passwordMW } = require("../middleware");

const userSchema = Schema(
  {
    firstname: {
      type: String,
      required: [true, "Set first name"],
    },
    secondname: {
      type: String,
      required: [true, "Set second name"],
    },
    email: {
      type: String,
      required: [true, "Set email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Set phone number"],
      unique: true,
    },
    birthday: {
      type: String,
      default: null,
    },
    userDiscount: {
      type: Number,
      default: 0,
    },
    deliveryAddress: {
      type: String,
      default: null,
    },
    deliveryCity: {
      type: String,
      default: null,
    },
    pointPostcode: {
      type: String,
      default: null,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

passwordMW(userSchema);

const User = model("user", userSchema);
module.exports = { User };
