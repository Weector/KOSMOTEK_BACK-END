const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../../middleware");
const { userJoiSchemas: valid } = require("../../schemas");
const { auth: ctrl } = require("../../controller");

router.post("/register", valid.register, ctrlWrapper(ctrl.registerUser));
router.post("/login", valid.login, ctrlWrapper(ctrl.loginUser));
router.post("/refresh-token", valid.refresh, ctrlWrapper(ctrl.refreshToken));
router.post("/forgot-password", valid.email, ctrlWrapper(ctrl.forgotPassword));
router.post(
  "/reset-password/:id/:token",
  valid.password,
  ctrlWrapper(ctrl.resetPassword)
);

module.exports = router;
