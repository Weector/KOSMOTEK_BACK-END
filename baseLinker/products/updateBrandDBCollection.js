const { Brand } = require("../../models");
const { NotFoundError } = require("../../helpers/errors");
const { createInsertBrands } = require("./createInsertBrands");

// Brand collection updates based on Baselinker data
const updateBrandDBCollection = async () => {
  try {
    const brandList = await createInsertBrands();
    if (!brandList) {
      throw new NotFoundError("No brands data from baselinker available");
    }

    for (const brand of brandList) {
      await Brand.updateOne(
        { brandName: brand.brandName },
        { $set: brand },
        { upsert: true }
      );
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { updateBrandDBCollection };
