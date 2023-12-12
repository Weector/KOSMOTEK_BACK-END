const { makeBaselinkerRequest } = require("../makeBaselinkerRequest");


//.........................Function by finish update order in baseLinker.................
const setOrderFields = async (updateOrder) => {
  return await makeBaselinkerRequest("setOrderFields", updateOrder);
};

module.exports = { setOrderFields };
