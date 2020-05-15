"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        title: "Product One",
        description: "Product One description",
        sku: "product1",
        qty: 10,
        price: 550,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product Two",
        description: "Product Two description",
        sku: "product2",
        qty: 10,
        price: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product Three",
        description: "Product Three description",
        sku: "product3",
        qty: 10,
        price: 350,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product Four",
        description: "Product Four description",
        sku: "product4",
        qty: 100,
        price: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product Five",
        description: "Product Five description",
        sku: "product5",
        qty: 10,
        price: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product Six",
        description: "Product Six description",
        sku: "product6",
        qty: 10,
        price: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product Seven",
        description: "Product Seven description",
        sku: "product7",
        qty: 10,
        price: 750,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product Eight",
        description: "Product Eight description",
        sku: "product8",
        qty: 10,
        price: 800,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product Nine",
        description: "Product Nine description",
        sku: "product9",
        qty: 10,
        price: 900,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Product Ten",
        description: "Product Ten description",
        sku: "product10",
        qty: 10,
        price: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
