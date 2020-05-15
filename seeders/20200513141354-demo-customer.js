"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Customers", [
      {
        name: "Customer One",
        email: "customer1@example.com",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Customer Two",
        email: "customer2@example.com",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Customers", null, {});
  },
};
