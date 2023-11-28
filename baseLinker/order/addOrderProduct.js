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

  const orderProductIds = ordersData.orders.map((order) =>
    order.products.find(
      (product) => product.product_id === orderProduct.product_id
    )
  );

  //.................If such a product exists, simply add to quantity.................................
  if (orderProductIds[0]) {
    const udpateProduct = {
      order_id: params.order_id,
      order_product_id: orderProductIds[0].order_product_id,
      quantity: orderProductIds[0].quantity + orderProduct.quantity,
    };

    return await setOrderProductFields(udpateProduct);
  } else {
    await makeBaselinkerRequest("addOrderProduct", orderProduct);

    return await getOrders({ order_id: params.order_id });
  }
};

module.exports = { addOrderProduct };
