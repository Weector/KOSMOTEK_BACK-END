const express = require("express");
const router = express.Router();

const { product: ctrl } = require("../../controller");
const { ctrlWrapper } = require("../../middleware");

router.get("/check-bl", ctrlWrapper(ctrl.checkBL));

router.get("/", ctrlWrapper(ctrl.getAll));
router.get("/new-offers", ctrlWrapper(ctrl.getNewOffers));
router.get("/:productId", ctrlWrapper(ctrl.getById));

module.exports = router;
