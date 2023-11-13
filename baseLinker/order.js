const axios = require("axios");
const querystring = require("querystring");

async function OrderInBaselinker() {
  try {
    const response = await axios.post(
      process.env.BASELINKER_API_URL,
      querystring.stringify({
        method: "getOrders",
        parameters: {},
      }),
      {
        headers: {
          "X-BLToken": process.env.YOUR_API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  OrderInBaselinker,
};
