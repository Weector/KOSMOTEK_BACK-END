const {
  getBLGategoriesList,
  getRequiredCategories,
} = require("./getBLCategories");
const { NotFoundError } = require("../../helpers/errors");

// Create an array of categories to add in the category collection of database
const createInsertCategories = async () => {
  try {
    // Get an array of required category IDs and all available category IDs
    const requiredCategories = await getRequiredCategories();

    // Get an array all available category
    const blCategoriesList = await getBLGategoriesList();

    if (!blCategoriesList) {
      throw new NotFoundError("No categories data from baselinker available");
    }

    const allCategories = blCategoriesList.categories;

    // Get an array of objects of the required categories
    const filteredCategories = allCategories.filter((category) => {
      return requiredCategories.includes(category.category_id);
    });

    const categoriesToInsert = [];

    // Form the correct category object and push it to the categoriesToInsert array
    filteredCategories.map((category) => {
      const newCategory = {
        blCategoryId: category.category_id.toString(),
        categoryName: category.name,
        parentId: category.parent_id.toString(),
      };

      categoriesToInsert.push(newCategory);
    });

    return categoriesToInsert;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { createInsertCategories };
