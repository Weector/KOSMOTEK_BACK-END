const currentUser = async (req, res) => {
  const {
    token,
    firstname,
    secondname,
    phoneNumber,
    userDiscount,
    deliveryAddress,
    deliveryCity,
    pointPostcode,
    birthday,
  } = req.user;

  res.status(200).json({
    token,
    user: {
      firstname,
      secondname,
      phoneNumber,
      birthday,
      userDiscount,
      deliveryAddress,
      deliveryCity,
      pointPostcode,
    },
  });
};

module.exports = { currentUser };
