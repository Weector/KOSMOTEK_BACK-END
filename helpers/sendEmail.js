const sgMail = require("@sendgrid/mail");
require("dotenv").config();


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (data) => {
    const email = { ...data, from: process.env.SENDGRID_MAIL };
  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { sendEmail };
