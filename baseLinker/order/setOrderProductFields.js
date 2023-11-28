const { makeBaselinkerRequest } = require("../makeBaselinkerRequest");
const { getOrders } = require("./getOrders");

//.........................Function by updating in baseLinker.................
const setOrderProductFields = async (udpateProduct) => {
  await makeBaselinkerRequest("setOrderProductFields", udpateProduct);

  return await getOrders({ order_id: udpateProduct.order_id });
};

module.exports = { setOrderProductFields };
