const express = require("express");
const router = express.Router();

const { product: ctrl } = require("../../controller");
const { ctrlWrapper } = require("../../middleware");
const { productJoiSchemas } = require("../../schemas");
const { validateBody } = require("../../helpers/validateBody");

router.get("/", ctrlWrapper(ctrl.getAll));
router.get("/new-offers", ctrlWrapper(ctrl.getNewOffers));
router.get("/:productId", ctrlWrapper(ctrl.getById));

router.post(
  "/",
  validateBody(productJoiSchemas.addSchema),
  ctrlWrapper(ctrl.addProduct)
);

module.exports = router;
