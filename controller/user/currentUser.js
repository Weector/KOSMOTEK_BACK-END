const currentUser = async (req, res) => {
  const {
    token,
    firstname,
    secondname,
    phoneNumber,
    userDiscount,
    deliveryAddress,
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
    },
  });
};

module.exports = { currentUser };
