'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManifestationCognitive = sequelize.define('ManifestationCognitive', {
    alterationMemoireTravail: DataTypes.BOOLEAN,
    difficulteCoordinationMouvement: DataTypes.BOOLEAN,
    troubleMemoire: DataTypes.BOOLEAN,
    ralentissementPensee: DataTypes.BOOLEAN,
    oublis: DataTypes.BOOLEAN,
    perteMot: DataTypes.BOOLEAN,
    difficulteConcentration: DataTypes.BOOLEAN,
    brouillardMental: DataTypes.BOOLEAN,
    troubleOrientation: DataTypes.BOOLEAN,
    troubleVisuoSpacial: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING,
    dateDuJour: DataTypes.DATE
  }, {});
  ManifestationCognitive.associate = function(models) {
    // associations can be defined here
  };
  return ManifestationCognitive;
};