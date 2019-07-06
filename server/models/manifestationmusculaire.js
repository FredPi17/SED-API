'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManifestationMusculaire = sequelize.define('ManifestationMusculaire', {
    myalgieDiffuse: DataTypes.BOOLEAN,
    fatigueMusculaire: DataTypes.BOOLEAN,
    crampe: DataTypes.BOOLEAN,
    faiblesseMusculaire: DataTypes.BOOLEAN,
    spasmeMusculaire: DataTypes.BOOLEAN,
    contracture: DataTypes.BOOLEAN,
    courbature: DataTypes.BOOLEAN,
    dystonie: DataTypes.BOOLEAN,
    hypertonie: DataTypes.BOOLEAN,
    hypotonie: DataTypes.BOOLEAN,
    fasciculation: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING,
      dateDuJour: DataTypes.DATE,
      idUtilisateur: DataTypes.INTEGER
  }, {});
  ManifestationMusculaire.associate = function(models) {
    // associations can be defined here
  };
  return ManifestationMusculaire;
};
