const { NotFoundError } = require("../helpers/errors");
const { getFullProductsDataFromBL } = require("./getProductsDataFromBL");

// Create an array of products to add in the product collection of database
const createProductsToInsert = async () => {
  try {
    // Get complete information about all products
    const responseApi = await getFullProductsDataFromBL();

    if (!responseApi) {
      throw new NotFoundError("No products data from baselinker available");
    }

    const productsBL = responseApi.products;

    const productsToInsert = [];

    // Form the correct product object and push it to the productsToInsert array
    for (const productId in productsBL) {
      const product = productsBL[productId];

      const {
        product_id,
        name,
        quantity,
        price_brutto,
        price_wholesale_netto,
        category_id,
        man_name,
        images,
        features,
        variants,
        description,
      } = product;

      // Conversion of the "features" property into an array of objects
      const attributes = features.map((feature) => {
        return {
          attributeName: feature[0],
          attributeValue: feature[1],
        };
      });

      // Create an array of objects from all product description_extra
      const descriptionExtra = [];

      let i = 1;
      while (`description_extra${i}` in product) {
        const key = `description_extra${i}`;

        descriptionExtra.push({
          [key]: product[key],
        });
        i += 1;
      }

      // Create a product object to store in the product collection of database
      const newProduct = {
        blProductId: product_id.toString(),
        productName: name,
        quantity,
        price: price_brutto,
        discountPrice: price_wholesale_netto,
        categoryId: category_id.toString(),
        brand: man_name,
        images,
        attributes,
        variants,
        description,
        descriptionExtra,
      };

      productsToInsert.push(newProduct);
    }

    return productsToInsert;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { createProductsToInsert };
