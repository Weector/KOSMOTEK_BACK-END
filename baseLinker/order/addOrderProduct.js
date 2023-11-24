const { getOrders } = require("./getOrders");
const { makeBaselinkerRequest } = require("../makeBaselinkerRequest");
const { setOrderProductFields } = require("./setOrderProductFields");


const addOrderProduct = async (params) => {
  const orderProduct = {
    storage_id: "bl_1",
    order_id: params.order_id,
    ...params.products[0],
  };

  //.................Checking that the user does not add an existing product to the order..............
  const ordersData = await getOrders({
    order_id: params.order_id,
  });

  const orderProductIds = ordersData.orders
    .filter((order) =>
      order.products.find(
        (product) => product.product_id === orderProduct.product_id
      )
    )
    .map((order) => ({
      order_product_id: order.products[0].order_product_id.toString(),
      quantity: order.products[0].quantity,
    }));

  //.................If such a product exists, simply add to quantity.................................
  if (orderProductIds.length > 0) {
    const udpateProduct = {
      order_id: params.order_id,
      order_product_id: orderProductIds[0].order_product_id,
      quantity: orderProductIds[0].quantity + orderProduct.quantity,
    };

    return await setOrderProductFields(udpateProduct);
  } else {
    return await makeBaselinkerRequest("addOrderProduct", orderProduct);
  }
};

module.exports = { addOrderProduct };
