const {
  createProductsToInsert,
  //   createCategoriesToInsert,
  //   createBrandsToInsert,
} = require("../../baseLinker");

const checkBL = async (req, res) => {
  const productsToInsert = await createProductsToInsert();
  // const categoriesToInsert = await createCategoriesToInsert();
  // const brandsToInsert = await createBrandsToInsert();

  const response = productsToInsert;
  //   const response = categoriesToInsert;
  //   const response = brandsToInsert;

  res.json({
    status: "success",
    code: 200,
    data: response,
  });
};

module.exports = { checkBL };
