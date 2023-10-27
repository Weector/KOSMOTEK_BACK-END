const { ValidationError } = require("./errors");

// Validate request body
const validateBody = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    next(new ValidationError(validationResult.error.details[0].message));
  }
  next();
};

module.exports = { validateBody };
