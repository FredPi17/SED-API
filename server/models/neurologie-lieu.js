'use strict';
module.exports = (sequelize, DataTypes) => {
  const NeurologieLieu = sequelize.define('NeurologieLieu', {
    neurologie: DataTypes.STRING,
    idNeurologie: DataTypes.INTEGER,
    nom: DataTypes.STRING
  }, {});
  NeurologieLieu.associate = function(models) {
    // associations can be defined here
  };
  return NeurologieLieu;
};
