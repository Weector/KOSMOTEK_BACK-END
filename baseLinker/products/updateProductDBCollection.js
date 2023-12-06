const { Product } = require("../../models");
const { NotFoundError } = require("../../helpers/errors");
const { createInsertProducts } = require("./createInsertProducts");

// Product collection updates based on Baselinker data
const updateProductDBCollection = async () => {
  try {
    const productList = await createInsertProducts();
    if (!productList) {
      throw new NotFoundError("No products data from baselinker available");
    }

    for (const product of productList) {
      await Product.updateOne(
        { blProductId: product.blProductId },
        { $set: product },
        { upsert: true }
      );
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { updateProductDBCollection };
