const axios = require("axios");
const querystring = require("querystring");

const { WrongParamsError } = require("../helpers/errors");

const BASELINKER_API_URL = process.env.BASELINKER_API_URL;
const YOUR_API_KEY = process.env.YOUR_API_KEY;

const makeBaselinkerRequest = async (method, parameters) => {
  try {
    const responseAPI = await axios.post(
      BASELINKER_API_URL,
      querystring.stringify({
        method,
        parameters: JSON.stringify(parameters),
      }),
      {
        headers: {
          "X-BLToken": YOUR_API_KEY,
        },
      }
    );

    if (
      !responseAPI.data.status === "ERROR" ||
      responseAPI.data.error_message
    ) {
      throw new WrongParamsError(responseAPI.data.error_message);
    }

    return responseAPI.data;
  } catch (error) {
    console.error(
      `Error making Baselinker API request for method ${method}:`,
      error.message
    );
  }
};

module.exports = { makeBaselinkerRequest };
