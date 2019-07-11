'use strict';
module.exports = (sequelize, DataTypes) => {
  const Articulation = sequelize.define('Articulation', {
    name: DataTypes.STRING
  }, {});
  Articulation.associate = function(models) {
    // associations can be defined here
  };
  return Articulation;
};