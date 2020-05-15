"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      sku: { type: DataTypes.STRING, unique: true },
      qty: DataTypes.INTEGER,
      price: DataTypes.DECIMAL(10, 2),
    },
    {}
  );
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};
