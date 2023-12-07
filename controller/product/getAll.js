const { Product } = require("../../models");

// Get all products and their count from collection

const getAll = async (req, res) => {
  const allProducts = await Product.find(
    {},
    "-blProductId -createdAt -updatedAt"
  );
  const productsCount = await Product.find().count();
  res.json({
    status: "success",
    code: 200,
    data: {
      products: allProducts,
      productsCount,
    },
  });
};

module.exports = { getAll };
