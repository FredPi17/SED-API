'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManifestationUrinaire = sequelize.define('ManifestationUrinaire', {
    brulureMictionnelle: DataTypes.BOOLEAN,
    douleurFosseLombaire: DataTypes.BOOLEAN,
    infectionUrinaireSuspectee: DataTypes.BOOLEAN,
    infectionUrinaireAveree: DataTypes.BOOLEAN,
    pyelonephrite: DataTypes.BOOLEAN,
    coliqueNephretique: DataTypes.BOOLEAN,
    douleurVessie: DataTypes.BOOLEAN,
    hematurieMacro: DataTypes.BOOLEAN,
    hematurieMicro: DataTypes.BOOLEAN,
    urineMalodorante: DataTypes.BOOLEAN,
    urineTrouble: DataTypes.BOOLEAN,
    nycturie: DataTypes.BOOLEAN,
    fuiteUrinaire: DataTypes.BOOLEAN,
    incontinenceEffort: DataTypes.BOOLEAN,
    imperiosite: DataTypes.BOOLEAN,
    goutteRetardataire: DataTypes.BOOLEAN,
    diminutionBesoinUriner: DataTypes.BOOLEAN,
    retentionUrine: DataTypes.BOOLEAN,
    difficulteUriner: DataTypes.BOOLEAN,
    impossibiliteUriner: DataTypes.BOOLEAN,
    sensationVidangeComplete: DataTypes.BOOLEAN,
    mictionDeuxTemps: DataTypes.BOOLEAN,
    mictionPoussee: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING,
    dateDuJour: DataTypes.DATE
  }, {});
  ManifestationUrinaire.associate = function(models) {
    // associations can be defined here
  };
  return ManifestationUrinaire;
};