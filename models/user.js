const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = Schema(
  {
    firstname: {
      type: String,
      required: [true],
    },
    secondname: {
      type: String,
      required: [true],
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
    userDiscount: {
      type: Number,
      default: 0,
    },
    deliveryAddress: {
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

userSchema.pre("save", async function (next) {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();
  if (update.password) {
    update.password = await bcrypt.hash(update.password, 10);
  }
  next();
});

const User = model("user", userSchema);
module.exports = { User };
