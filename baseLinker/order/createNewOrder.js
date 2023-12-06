const { makeBaselinkerRequest } = require("../makeBaselinkerRequest");
const { getOrders } = require("./getOrders");

const createNewOrder = async (params, user) => {
  const order = {
    order_status_id: "2919",
    ...params,
  };

  if (user) {
    const {
      deliveryAddress,
      deliveryCity,
      pointPostcode,
      firstname,
      secondname,
      email,
      phoneNumber,
    } = user;

    order.user_login = email;
    order.phone = phoneNumber;
    order.email = email;
    order.delivery_fullname = `${firstname} ${secondname}`;
    order.delivery_address = deliveryAddress;
    order.delivery_city = deliveryCity;
    order.delivery_postcode = pointPostcode;
    order.delivery_point_postcode = pointPostcode;
    order.delivery_point_city = deliveryCity;
    order.invoice_fullname = `${firstname} ${secondname}`;
    order.invoice_address = deliveryAddress;
    order.invoice_city = deliveryCity;
    order.invoice_postcode = pointPostcode;
  }

  const { order_id } = await makeBaselinkerRequest("addOrder", order);
  return await getOrders({ order_id });
};

module.exports = {
  createNewOrder,
};
