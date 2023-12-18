const passwordGenerator = require("password-generator");

const { sendEmail } = require("../../helpers/sendEmail");
const createUserMarkup = require("../../helpers/createUserMarkup");

const autoRegisterUser = async (req, res, next) => {
  const { findUserBy, regUser } = require("../../services/auth");
  const bodyParams = req.body;

  try {
    const user = await findUserBy({ email: bodyParams.email });

    if (user === null) {
      const [firstname, secondname] = bodyParams.delivery_fullname.split(" ");

      const password = passwordGenerator(8, false);

      const paramsUser = {
        firstname,
        secondname,
        password,
        email: bodyParams.email,
        phoneNumber: bodyParams.phone,
        deliveryAddress: bodyParams.delivery_address,
        deliveryCity: bodyParams.delivery_city,
        pointPostcode: bodyParams.delivery_postcode,
      };

      await regUser(paramsUser);

      const mail = {
        to: bodyParams.email,
        subject: "CREATE USER",
        html: createUserMarkup(bodyParams.email, password),
      };

      await sendEmail(mail);
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { autoRegisterUser };
