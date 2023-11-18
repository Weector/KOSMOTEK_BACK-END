const { Schema, model } = require("mongoose");

const { errorHandler } = require("../middleware");

const brandSchema = Schema(
  {
    brandName: {
      type: String,
      required: [true, "Set baselinker man_name"],
    },
  },
  { versionKey: false }
);

brandSchema.post("save", errorHandler);

const Brand = model("brand", brandSchema);

module.exports = {
  Brand,
};
