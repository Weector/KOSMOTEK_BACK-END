const { findUserBy } = require("../../services/auth");
const { NotFoundError } = require("../../helpers/errors");
const { createResetPassToken } = require("../../helpers/createToken");
const resetPasswordMarkup = require("../../helpers/resetPasswordMarkup");
const { sendEmail } = require("../../helpers/sendEmail");


//....................sending a letter "forgot password" .............................
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const { FRONT_URL } = process.env;

  const user = await findUserBy({ email });
  if (!user) throw new NotFoundError("User not found");

  const token = await createResetPassToken(user);
  const link = `${FRONT_URL}/reset-password?id=${user._id}&token=${token}`;

  const mail = {
    to: email,
    subject: "PASSWORD RECOVERY",
    html: resetPasswordMarkup(link),
  };

  await sendEmail(mail);

  res.status(201).json({
    message: `Done! We send password reset link to ${email}`,
  });
};

module.exports = { forgotPassword };
