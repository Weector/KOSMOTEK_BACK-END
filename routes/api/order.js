const express = require("express");
const router = express.Router();
const { orderJoiSchemas: valid } = require("../../schemas");
const { order: ctrl } = require("../../controller");
const { ctrlWrapper, tokenMiddleware } = require("../../middleware");


router.post("/create", valid.addOrder, ctrlWrapper(ctrl.addOrder));
router.post("/quantity", valid.quantity, ctrlWrapper(ctrl.updateQuantity));
router.delete("/:order_id", valid.remove, ctrlWrapper(ctrl.removeProduct));
router.use(tokenMiddleware);
router.get("/", valid.getStatusOrder, ctrlWrapper(ctrl.getUserOrders));

module.exports = router;
