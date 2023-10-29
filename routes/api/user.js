const express = require("express");
const router = express.Router();
const { user: ctrl } = require("../../controller");
const { ctrlWrapper, tokenMiddleware } = require("../../middleware");
const { userJoiSchemas: valid } = require("../../schemas");

router.use(tokenMiddleware);

router.patch("/update", valid.userUpdate, ctrlWrapper(ctrl.update));
router.delete("/logout", ctrlWrapper(ctrl.logout));

module.exports = router;
