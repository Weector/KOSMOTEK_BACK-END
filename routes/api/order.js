const express = require("express");
const router = express.Router();
const { orderJoiSchemas: valid } = require("../../schemas");
const { order: ctrl } = require("../../controller");
const { ctrlWrapper, tokenMiddleware } = require("../../middleware");


router.use(tokenMiddleware);

router.get("/get-all", valid.getStatusOrder, ctrlWrapper(ctrl.getOrders));
router.post("/create-new", valid.addOrder, ctrlWrapper(ctrl.addOrder));

module.exports = router;
