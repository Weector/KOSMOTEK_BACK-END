const { makeBaselinkerRequest } = require("../makeBaselinkerRequest");
const { getOrders } = require("./getOrders");

const createNewOrder = async (params) => {
  const order = {
    order_status_id: "2919",
    ...params,
  };

  const { order_id } = await makeBaselinkerRequest("addOrder", order);
  return await getOrders({order_id});
};

module.exports = {
  createNewOrder,
};
