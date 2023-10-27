const cron = require("node-cron");
const moment = require("moment");
const { User } = require("../models");
const { updateUser } = require("../services/user");


//...............birthday check for discount calculation......................
cron.schedule("0 0 * * * ", async () => {
  const users = await User.find();
  const currentData = moment();

  for (const user of users) {
    const birthdayData = moment(user.birthday, "DD-MM-YYYY");
    const oneMonthBeforeBirthday = moment(birthdayData).subtract(1, "months");
    const oneDayAfterBirthday = moment(birthdayData).add(1, "days");
    

    if (
      oneMonthBeforeBirthday.date() === currentData.date() &&
      oneMonthBeforeBirthday.month() === currentData.month()
    ) {
      await updateUser(user._id, { userDiscount: 0.15 });
    } else if (
      oneDayAfterBirthday.date() === currentData.date() &&
      oneDayAfterBirthday.month() === currentData.month()
    ) {
      await updateUser(user._id, { userDiscount: 0 });
    }
  }
});
