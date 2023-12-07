const { Product } = require("../../models");
const { NotFoundError } = require("../../helpers/errors");
const { productsBL } = require("../../baseLinker");

// Get product by ID from collection

const getById = async (req, res) => {
  const { productId } = req.params;

  const productById = await Product.findById(productId);

  if (!productById) {
    throw new NotFoundError("There no products by this id");
  }

  const blProductById = await productsBL.getBLProductById(
    productById.blProductId
  );

  await Product.updateOne(
    { blProductId: blProductById.product_id },
    { $set: { quantity: blProductById.quantity } }
  );

  const updatedProduct = await Product.findById(
    productId,
    "-blProductId -createdAt -updatedAt"
  );

  res.json({
    status: "success",
    code: 200,
    data: {
      product: updatedProduct,
    },
  });
};

module.exports = { getById };
