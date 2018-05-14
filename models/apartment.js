'use strict';
module.exports = (sequelize, DataTypes) => {
  var apartment = sequelize.define('apartment', {
    building: DataTypes.STRING,
    address: DataTypes.STRING,
    apartmentNumber: DataTypes.INTEGER,
    rent: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    squareFeet: DataTypes.INTEGER,
    parkingSpaces: DataTypes.INTEGER
  }, {});
  apartment.associate = function(models) {
    // associations can be defined here
  };
  return apartment;
};