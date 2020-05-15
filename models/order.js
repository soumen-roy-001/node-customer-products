"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      customer_id: DataTypes.INTEGER,
      total_amount: DataTypes.DECIMAL,
      status: DataTypes.STRING,
    },
    {}
  );
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.Customer);
  };
  return Order;
};
