const mongoose = require("mongoose");
const path = require("path");
const app = require("./app");

const configPath = path.join(__dirname, ".env");
require("dotenv").config({ path: configPath });

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log("Database connection successful")
    )
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// const { productsBL } = require("./baseLinker");

// productsBL.schedulerUpdates();
