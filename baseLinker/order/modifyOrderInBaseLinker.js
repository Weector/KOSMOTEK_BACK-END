const { makeBaselinkerRequest } = require("../makeBaselinkerRequest");
const { getOrders } = require("./getOrders");

//.........................Function by updating in baseLinker.................
const modifyOrderInBaseLinker = async (param, body) => {
  await makeBaselinkerRequest(param, body);

  return await getOrders({ order_id: body.order_id });
};

module.exports = { modifyOrderInBaseLinker };
