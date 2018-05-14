'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('apartments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      building: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      apartmentNumber: {
        type: Sequelize.INTEGER
      },
      rent: {
        type: Sequelize.INTEGER
      },
      bedrooms: {
        type: Sequelize.INTEGER
      },
      bathrooms: {
        type: Sequelize.INTEGER
      },
      squareFeet: {
        type: Sequelize.INTEGER
      },
      parkingSpaces: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('apartments');
  }
};