const Joi = require("joi");
const { validateBody } = require("../helpers/validateBody");

//.....................auth user  scheme.........................................
const authJoiSchema = Joi.object({
  password: Joi.string()
    .regex(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/)
    .min(8),
  email: Joi.string().email({ maxDomainSegments: 2 }),
  firstname: Joi.string().min(3).max(30),
  secondname: Joi.string().min(3).max(30),
  birthday: Joi.string().optional(),
  phoneNumber: Joi.string().regex(/^\+?\d{1,15}$/),
}).required();

//.....................user update scheme........................................
const userJoiSchema = Joi.object({
  oldPassword: Joi.string()
    .regex(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/)
    .min(8),
  newPassword: Joi.string()
    .regex(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/)
    .min(8),
  email: Joi.string().email({ maxDomainSegments: 2 }),
  firstname: Joi.string().min(3).max(30),
  secondname: Joi.string().min(3).max(30),
  birthday: Joi.string(),
  phoneNumber: Joi.string(),
  deliveryAddress: Joi.string(),
  userDiscount: Joi.number(),
});


//.....................handling registration.....................................
const register = validateBody(authJoiSchema);

//.....................handling login............................................
const login = validateBody(
  authJoiSchema.keys({
    firstname: Joi.forbidden(),
    secondname: Joi.forbidden(),
    phoneNumber: Joi.forbidden(),
    deliveryAddress: Joi.forbidden(),
  })
);

//.....................handling update...........................................
const userUpdate = validateBody(userJoiSchema);

//.....................handling sendMail.........................................
const email = validateBody(
  Joi.object({
    email: Joi.string().email({ maxDomainSegments: 2 }).required(),
  })
);
//.....................handling reset password...................................
const password = validateBody(
  Joi.object({
    password: Joi.string()
      .regex(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/)
      .min(8)
      .required(),
  })
);

const refresh = validateBody(
  Joi.object({
    refreshToken: Joi.string().required(),
  })
);

const userJoiSchemas = {
  register,
  login,
  email,
  password,
  userUpdate,
  refresh,
};

module.exports = {
  userJoiSchemas,
};
