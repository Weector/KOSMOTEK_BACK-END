const { makeBaselinkerRequest } = require("../makeBaselinkerRequest");

const createNewOrder = async (params) => {
  const order = {
    order_status_id: "2919",
    ...params,
  };

  return await makeBaselinkerRequest("addOrder", order);
};

module.exports = {
  createNewOrder,
};
