const { order: ctrl } = require("../../baseLinker");

//................Update quantity product by orders..........................
const updateQuantity = async (req, res) => {
  const { order_id, order_product_id, quantity } = req.body;

  const newQuantity = await ctrl.setOrderProductFields({
    order_id,
    order_product_id,
    quantity,
  });

  res.status(200).json(newQuantity);
};

module.exports = { updateQuantity };
