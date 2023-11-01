// ...................Function for processing product data..........................
const updateOrder = async (products) => {
  const { Product } = require("../../models");

  const populatedProducts = await Promise.all(
    products.map(async (product) => {
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

  const totalPrice = populatedProducts.reduce(
    (total, product) => total + product.sum,
    0
  );

  const productsQuantity = populatedProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return { populatedProducts, totalPrice, productsQuantity };
};

// .........................Middleware for update...................................
const orderMW = (schema) => {
  schema.pre("save", async function (next) {
    const { populatedProducts, totalPrice } = await updateOrder(this.products);

    this.products = populatedProducts;
    this.totalPrice = totalPrice;
    next();
  });

  schema.pre("findOneAndUpdate", async function (next) {
    const update = this.getUpdate();

    const { populatedProducts, totalPrice, productsQuantity } =
      await updateOrder(update.products);

    update.products = populatedProducts;
    update.totalPrice = totalPrice;
    update.productsQuantity = productsQuantity;
    next();
  });
};

module.exports = { orderMW };
