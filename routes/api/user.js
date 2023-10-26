const express = require("express");
const router = express.Router();
const { user: ctrl } = require("../../controller");
const { ctrlWrapper, tokenMiddleware } = require("../../middleware");
const { userUpdateValid } = require("../../validation");

router.use(tokenMiddleware);

router.patch("/update", userUpdateValid, ctrlWrapper(ctrl.update));
router.delete("/logout", ctrlWrapper(ctrl.logout));

module.exports = router;
