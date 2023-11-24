const { makeBaselinkerRequest } = require("../makeBaselinkerRequest");

const setOrderProductFields = async (udpateProduct) => {
  return await makeBaselinkerRequest("setOrderProductFields", udpateProduct);
};

module.exports = { setOrderProductFields };
