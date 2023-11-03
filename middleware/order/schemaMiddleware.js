// ...................Function for processing order products data...................
const updateOrder = async (update) => {
  const { Product } = require("../../models");

  const populatedProducts = await Promise.all(
    update.products.map(async (product) => {
      const populatedProduct = await Product.findById(product.productId).select(
        "productName purchasePrice images"
      );

      product.price = populatedProduct.purchasePrice;
      product.productName = populatedProduct.productName;
      product.sum = populatedProduct.purchasePrice * product.quantity;
      product.image = populatedProduct.images.main;

      return product;
    })
  );

  const productsQuantity = populatedProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = populatedProducts.reduce(
    (total, product) => total + product.sum,
    0
  );

  update.products = populatedProducts;
  update.productsQuantity = productsQuantity;
  update.totalPrice = totalPrice;
};

// .........................Middleware for update...................................
const orderMW = (schema) => {
  schema.pre("save", async function (next) {
    await updateOrder(this);

    next();
  });

  schema.pre("findOneAndUpdate", async function (next) {
    const update = this.getUpdate();

    if (update.products) await updateOrder(update);

    next();
  });
};

module.exports = { orderMW };
