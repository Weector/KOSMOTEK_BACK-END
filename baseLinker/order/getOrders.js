const { makeBaselinkerRequest } = require("../makeBaselinkerRequest");

const getOrders = async (params) => {
  return await makeBaselinkerRequest("getOrders", params);
};

module.exports = { getOrders };
