const express = require("express");
const router = express.Router();
const { orderJoiSchemas: valid } = require("../../schemas");
const { order: ctrl } = require("../../controller");
const { ctrlWrapper, tokenMiddleware } = require("../../middleware");

router.use(tokenMiddleware);

router.get("/", valid.getStatusOrder, ctrlWrapper(ctrl.getOrders));
router.post("/create", valid.addOrder, ctrlWrapper(ctrl.addOrder));
router.delete("/:orderId", valid.remove, ctrlWrapper(ctrl.removeProduct));

module.exports = router;
