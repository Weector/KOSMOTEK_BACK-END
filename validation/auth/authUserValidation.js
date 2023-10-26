const Joi = require("joi");
const { ValidationError } = require("../../helpers/errors");


//..............user validation scheme.............................
const userSchema = Joi.object({
  password: Joi.string()
    .regex(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/)
    .min(8),
  email: Joi.string().email({ maxDomainSegments: 2 }),
  firstname: Joi.string().min(3).max(30),
  secondname: Joi.string().min(3).max(30),
  birthday: Joi.string().optional(),
  phoneNumber: Joi.string().regex(/^\+?\d{1,15}$/),
}).required();

//.............handling validation error.............................
const validate = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    next(new ValidationError(validationResult.error.details[0].message));
  }
  next();
};

//.............handling registration.................................
const registerValid = validate(userSchema);
//.............handling login........................................
const loginValid = validate(
  userSchema.keys({
    firstname: Joi.forbidden(),
    secondname: Joi.forbidden(),
    phoneNumber: Joi.forbidden(),
    deliveryAddress: Joi.forbidden(),
  })
);


module.exports = { registerValid, loginValid };