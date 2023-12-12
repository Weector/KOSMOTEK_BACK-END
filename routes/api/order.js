const express = require("express");
const router = express.Router();
const { orderJoiSchemas: valid } = require("../../schemas");
const { order: ctrl } = require("../../controller");
const { ctrlWrapper, tokenMiddleware, tokenMiddlewareByOrder, autoRegisterUser } = require("../../middleware");

router.use(tokenMiddlewareByOrder);

router.post("/create", valid.addOrder, ctrlWrapper(ctrl.addOrder));
router.post("/quantity", valid.quantity, ctrlWrapper(ctrl.updateQuantity));
router.delete("/:order_id", valid.remove, ctrlWrapper(ctrl.removeProduct));
router.post("/update/:order_id", valid.update, autoRegisterUser, ctrlWrapper(ctrl.updateOrder));

router.use(tokenMiddleware);
router.get("/", ctrlWrapper(ctrl.getUserOrders));

module.exports = router;
