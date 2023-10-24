const Joi = require("joi");
const { ValidationError } = require("../../helpers/errors");


const userSchema = Joi.object({
  password: Joi.string()
    .regex(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/)
    .min(8),
  email: Joi.string().email({ maxDomainSegments: 2 }),
  username: Joi.string().min(3).max(30),
  phoneNumber: Joi.string().regex(/^\+?\d{1,15}$/),
  deliveryAddress: Joi.string(),
}).required();

const validate = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return next(new ValidationError(validationResult.error.details));
  }
  next();
};

const registerValid = validate(userSchema);
const loginValid = validate(
  userSchema.keys({
    username: Joi.forbidden(),
    phoneNumber: Joi.forbidden(),
    deliveryAddress: Joi.forbidden(),
  })
);

module.exports = {
  registerValid,
  loginValid,
};
