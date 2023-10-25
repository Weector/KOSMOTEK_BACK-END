const cron = require("node-cron");
const moment = require("moment");
const { updateUser } = require("../services/user");
const { User } = require("../models/user");


//...............birthday check for discount calculation......................
cron.schedule("0 0 * * *", async () => {
  const users = await User.find();

  for (const user of users) {
    const birthdayMoment = moment(user.birthday, "DD-MM-YYYY");
    const currentMoment = moment();
    const oneWeekAfterBirthday = moment(birthdayMoment).add(7, "days");

    if (
      birthdayMoment.date() === currentMoment.date() &&
      birthdayMoment.month() === currentMoment.month()
    ) {
        await updateUser(user._id, { userDiscount: 30 });

    } else if (
      oneWeekAfterBirthday.date() === currentMoment.date() &&
      oneWeekAfterBirthday.month() === currentMoment.month()
    ) {
        await updateUser(user._id, { userDiscount: 0 });
    }
  }
});
