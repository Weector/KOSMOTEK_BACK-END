const { PersonalError } = require("../../helpers/errors");

//.....................error handler wrapper...........................
const errorHandler = (error, req, res) => {
  if (error instanceof PersonalError) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: error.message });
};

module.exports = {
  errorHandler,
};
