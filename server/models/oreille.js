'use strict';
module.exports = (sequelize, DataTypes) => {
  const Oreille = sequelize.define('Oreille', {
    hyperacousie: DataTypes.BOOLEAN,
    hypoacousie: DataTypes.BOOLEAN,
    acouphene: DataTypes.BOOLEAN,
    bourdonnement: DataTypes.BOOLEAN,
    saignementOreille: DataTypes.BOOLEAN,
    ecoulementOreille: DataTypes.BOOLEAN,
    otite: DataTypes.BOOLEAN,
    vertigeVrai: DataTypes.BOOLEAN,
    sensationVertige: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING,
    dateDuJour: DataTypes.DATE
  }, {});
  Oreille.associate = function(models) {
    // associations can be defined here
  };
  return Oreille;
};