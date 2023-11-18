const { getFullProductsDataFromBL } = require("./getProductsDataFromBL");
const { NotFoundError } = require("../helpers/errors");

const createBrandsToInsert = async () => {
  try {
    const productsResponseAPI = await getFullProductsDataFromBL();

    if (!productsResponseAPI) {
      throw new NotFoundError("No products data from baselinker available");
    }

    const blProductList = productsResponseAPI.products;

    // Get an array of all category IDs from products
    const requiredBrandsArray = Object.values(blProductList).map(
      (product) => product.man_name
    );

    const uniqueRequiredBrands = [];

    requiredBrandsArray.forEach((value) => {
      if (!uniqueRequiredBrands.includes(value)) {
        uniqueRequiredBrands.push(value);
      }
    });

    const brandToInsert = uniqueRequiredBrands
      .filter((brand) => brand.trim() !== "")
      .map((brand) => ({ brandName: brand.trim() }));

    return brandToInsert;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { createBrandsToInsert };
