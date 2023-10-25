const express = require("express");
const router = express.Router();
const { user: ctrl } = require("../../controller");
const { userUpdateValid, ctrlWrapper, authMiddleware } = require("../../middleware");

router.use(authMiddleware);

router.delete("/logout", ctrlWrapper(ctrl.logout));
router.patch("/update", userUpdateValid, ctrlWrapper(ctrl.update));

module.exports = router;
