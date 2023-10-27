const { Product } = require("../../models");
const { NotFoundError } = require("../../helpers/errors");

// Get new offers in product collection

const getNewOffers = async (req, res) => {
  const allNewProducts = await Product.find({ newOffer: true });

  if (allNewProducts.length === 0) {
    throw new NotFoundError("There no new offers");
  }

  const productsCount = await Product.find({ newOffer: true }).count();

  res.json({
    status: "success",
    code: 200,
    data: {
      products: allNewProducts,
      productsCount,
    },
  });
};

module.exports = { getNewOffers };
