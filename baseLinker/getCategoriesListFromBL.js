const { makeBaselinkerRequest } = require("./makeBaselinkerRequest");
const { getFullProductsDataFromBL } = require("./getProductsDataFromBL");
const { NotFoundError } = require("../helpers/errors");

// Get all categories from baselinker
const getAllGategoriesFromBL = async () => {
  const parameters = {
    storage_id: "bl_1",
  };

  return await makeBaselinkerRequest("getCategories", parameters);
};

// Get an array of all the categories IDs to which the products belong
const getRequiredCategories = async () => {
  try {
    // Get complete information about all products
    const productsResponseAPI = await getFullProductsDataFromBL();

    if (!productsResponseAPI) {
      throw new NotFoundError("No products data from baselinker available");
    }

    const blProductList = productsResponseAPI.products;

    // Get an array of all category IDs from products
    const requiredCategoriesArray = Object.values(blProductList).map(
      (product) => product.category_id
    );

    const uniqueRequiredCategories = [];

    requiredCategoriesArray.forEach((value) => {
      if (!uniqueRequiredCategories.includes(value)) {
        uniqueRequiredCategories.push(value);
      }
    });

    return uniqueRequiredCategories;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAllGategoriesFromBL, getRequiredCategories };
