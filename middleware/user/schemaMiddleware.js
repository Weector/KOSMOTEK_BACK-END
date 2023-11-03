const bcrypt = require("bcrypt");

const hashPassword = async (password) => await bcrypt.hash(password, 10);

const passwordMW = (schema) => {
  //...............the new user's password is hashed.................
  schema.pre("save", async function (next) {
    if (this.isNew) this.password = await hashPassword(this.password);
    next();
  });

  //...............the password is hashed after it is updated.................
  schema.pre("findOneAndUpdate", async function (next) {
    const update = this.getUpdate();
    if (update.password) update.password = await hashPassword(update.password);
    next();
  });
};

module.exports = { passwordMW };
