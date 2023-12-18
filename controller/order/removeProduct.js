const { order: ctrl } = require("../../baseLinker");

//................Remove product in order..........................
const removeProduct = async (req, res) => {
  const { order_id } = req.params;
  const { order_product_id } = req.body;

  const deleteProduct = await ctrl.modifyOrderInBaseLinker(
    "deleteOrderProduct",
    {
      order_id,
      order_product_id,
    }
  );

  res.status(200).json(deleteProduct);
};

module.exports = { removeProduct };
