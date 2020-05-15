"use strict";
module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define(
    "OrderProduct",
    {
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      unit_price: DataTypes.DECIMAL,
    },
    {}
  );
  OrderProduct.associate = function (models) {
    // associations can be defined here
    OrderProduct.belongsTo(models.Order);
    OrderProduct.belongsTo(models.Product);
  };
  return OrderProduct;
};
