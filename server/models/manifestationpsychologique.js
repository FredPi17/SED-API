'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManifestationPsychologique = sequelize.define('ManifestationPsychologique', {
    anxiete: DataTypes.BOOLEAN,
    criseAngoisse: DataTypes.BOOLEAN,
    stress: DataTypes.BOOLEAN,
    epuisementPsychique: DataTypes.BOOLEAN,
    burnOut: DataTypes.BOOLEAN,
    tensionInterne: DataTypes.BOOLEAN,
    etatDepressif: DataTypes.BOOLEAN,
    perteElanVital: DataTypes.BOOLEAN,
    tristesseInhabituelle: DataTypes.BOOLEAN,
    irritabilite: DataTypes.BOOLEAN,
    hypersensibilite: DataTypes.BOOLEAN,
    baisseMoral: DataTypes.BOOLEAN,
    sauteHumeur: DataTypes.BOOLEAN,
    envieDeRien: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING,
    dateDuJour: DataTypes.DATE
  }, {});
  ManifestationPsychologique.associate = function(models) {
    // associations can be defined here
  };
  return ManifestationPsychologique;
};