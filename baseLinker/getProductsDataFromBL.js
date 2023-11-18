const { makeBaselinkerRequest } = require("./makeBaselinkerRequest");
const { NotFoundError } = require("../helpers/errors");

// Get product list from baselinker
const getProductListFromBL = async () => {
  const parameters = {
    storage_id: "bl_1",
  };

  return await makeBaselinkerRequest("getProductsList", parameters);
};

// Get complete product information from baselinker
const getFullProductsDataFromBL = async () => {
  try {
    const responseAPI = await getProductListFromBL();

    if (!responseAPI) {
      throw new NotFoundError("No products list from baselinker available");
    }

    const blProductList = responseAPI.products;

    // Get an array of all products IDs that are in the baselinker
    const arrayOfProductsId = blProductList.map(
      (product) => product.product_id
    );

    const parameters = {
      storage_id: "bl_1",
      products: arrayOfProductsId,
    };

    // Get complete information about all products
    const fullProductsDataFromBL = await makeBaselinkerRequest(
      "getProductsData",
      parameters
    );

    return fullProductsDataFromBL;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getFullProductsDataFromBL };
