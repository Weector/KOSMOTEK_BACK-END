const { Schema, model } = require("mongoose");

const { errorHandler } = require("../middleware");

const categorySchema = Schema(
  {
    blCategoryId: {
      type: String,
      required: [true, "Set baselinker category_id"],
    },
    categoryName: {
      type: String,
      required: [true, "Set baselinker name"],
    },
    parentId: {
      type: String,
      required: [true, "Set baselinker parent_id"],
    },
  },
  { versionKey: false, timestamps: true }
);

categorySchema.post("save", errorHandler);

const Category = model("category", categorySchema);

module.exports = {
  Category,
};
