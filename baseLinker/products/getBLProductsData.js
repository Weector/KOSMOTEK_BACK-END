const { makeBaselinkerRequest } = require("../makeBaselinkerRequest");
const { NotFoundError } = require("../../helpers/errors");

const STORAGE_ID = "bl_1";
// Get product list from baselinker
const getBLProductList = async () => {
  const parameters = {
    storage_id: STORAGE_ID,
  };

  return await makeBaselinkerRequest("getProductsList", parameters);
};

// Get complete products information from baselinker
const getBLProductsData = async () => {
  try {
    const responseAPI = await getBLProductList();

    if (!responseAPI) {
      throw new NotFoundError("No products list from baselinker available");
    }

    const blProductList = responseAPI.products;

    // Get an array of all products IDs that are in the baselinker
    const arrayOfProductsId = blProductList.map(
      (product) => product.product_id
    );

    const parameters = {
      storage_id: STORAGE_ID,
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

// Get product information by id
const getBLProductById = async (id) => {
  try {
    const parameters = {
      storage_id: STORAGE_ID,
      products: [id],
    };

    const { products } = await makeBaselinkerRequest(
      "getProductsData",
      parameters
    );

    if (!products[id]) {
      throw new NotFoundError("No product by id from baselinker available");
    }

    return products;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getBLProductList, getBLProductsData, getBLProductById };
