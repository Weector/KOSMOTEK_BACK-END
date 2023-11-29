const { makeBaselinkerRequest } = require("../makeBaselinkerRequest");
const { getOrders } = require("./getOrders");

//.........................Function by updating in baseLinker.................
const deleteOrderProduct = async (deleteProduct) => {
  await makeBaselinkerRequest("deleteOrderProduct", deleteProduct);

  return await getOrders({ order_id: deleteProduct.order_id });
};

module.exports = { deleteOrderProduct };
