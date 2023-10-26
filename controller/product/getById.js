const { Product } = require("../../models");
const { NotFoundError } = require("../../helpers/errors");

// Get product by ID from collection

const getById = async (req, res) => {
  const { productId } = req.params;

  const productById = await Product.findById(productId);

  if (!productById) {
    throw new NotFoundError("There no products by this id");
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      product: productById,
    },
  });
};

module.exports = { getById };
