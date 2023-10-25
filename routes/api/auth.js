const express = require("express");
const router = express.Router();
const { registerValid, loginValid, ctrlWrapper } = require("../../middleware");
const { auth: ctrl } = require("../../controller");

router.post("/register", registerValid, ctrlWrapper(ctrl.registerUser));
router.post("/login", loginValid, ctrlWrapper(ctrl.loginUser));

module.exports = router;