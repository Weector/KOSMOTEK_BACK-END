const Joi = require("joi");
const { ValidationError } = require("../../helpers/errors");

module.exports = {
  userUpdateValid: (req, res, next) => {
    const schema = Joi.object({
      password: Joi.string()
        .regex(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/)
        .min(8),
      email: Joi.string().email({ maxDomainSegments: 2 }),
      username: Joi.string().min(3).max(30),
      phoneNumber: Joi.string(),
      deliveryAddress: Joi.string(),
      userDiscount: Joi.number(),
    });

    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      next(new ValidationError(validationResult.error.details));
    }
    next();
  }
}