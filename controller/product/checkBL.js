const { productsBL } = require("../../baseLinker");

const checkBL = async (req, res) => {
  // const productsToInsert = await productsBL.updateProductDBCollection();
  // const categoriesToInsert = await productsBL.updateCategoryDBCollection();
  // const brandsToInsert = await productsBL.updateBrandDBCollection();
  const productById = await productsBL.getBLProductById("281803");

  // const response = productsToInsert;
  // const response = categoriesToInsert;
  // const response = brandsToInsert;
  const response = productById;

  res.json({
    status: "success",
    code: 200,
    data: response,
  });
};

module.exports = { checkBL };
