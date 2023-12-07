const { Category } = require("../../models");
const { NotFoundError } = require("../../helpers/errors");
const { createInsertCategories } = require("./createInsertCategories");

// Category collection updates based on Baselinker data
const updateCategoryDBCollection = async () => {
  try {
    const categoriesList = await createInsertCategories();
    if (!categoriesList) {
      throw new NotFoundError("No categories data from baselinker available");
    }

    for (const category of categoriesList) {
      await Category.updateOne(
        { blCategoryId: category.blCategoryId },
        { $set: category },
        { upsert: true }
      );
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { updateCategoryDBCollection };
