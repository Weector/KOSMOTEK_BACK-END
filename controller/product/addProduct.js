const { Product } = require("../../models");

// Add new product to collection
const addProduct = async (req, res) => {
  const data = req.body;
  const { price } = data;

  let newPrice = price;

  if ("productDiscount" in data) {
    const { productDiscount } = data;
    newPrice = price - price * productDiscount;
  }

  const newProduct = await Product.create({ ...data, purchasePrice: newPrice });

  res.json({
    status: "success",
    code: 200,
    data: {
      product: newProduct,
    },
  });
};

module.exports = { addProduct };
