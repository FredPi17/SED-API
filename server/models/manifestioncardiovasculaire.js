'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManifestionCardioVasculaire = sequelize.define('ManifestionCardioVasculaire', {
    tachycardie: DataTypes.BOOLEAN,
    tachycardieNb: DataTypes.INTEGER,
    bradycardie: DataTypes.BOOLEAN,
    bradycardieNb: DataTypes.INTEGER,
    hypertension: DataTypes.BOOLEAN,
    hypertensionNb: DataTypes.INTEGER,
    hypotension: DataTypes.BOOLEAN,
    hypotensionNb: DataTypes.INTEGER,
    tachycardiePosturale: DataTypes.BOOLEAN,
    tachycardiePosturaleNb: DataTypes.INTEGER,
    palpitation: DataTypes.BOOLEAN,
    arythmie: DataTypes.BOOLEAN,
    marbrures: DataTypes.BOOLEAN,
    extremiteFroideEtPale: DataTypes.BOOLEAN,
    malaise: DataTypes.BOOLEAN,
    varice: DataTypes.BOOLEAN,
    syncope: DataTypes.BOOLEAN,
    doigtEnfle: DataTypes.BOOLEAN,
    phlebite: DataTypes.BOOLEAN,
    gonflementJambeChevillePieds: DataTypes.BOOLEAN,
    syndromeReynaud: DataTypes.BOOLEAN,
    essouflement: DataTypes.BOOLEAN,
    douleurThoracique: DataTypes.BOOLEAN,
    evanouissement: DataTypes.BOOLEAN,
    systole: DataTypes.INTEGER,
    diastole: DataTypes.INTEGER,
    pouls: DataTypes.INTEGER,
    commentaire: DataTypes.STRING,
    dateDuJour: DataTypes.DATE
  }, {});
  ManifestionCardioVasculaire.associate = function(models) {
    // associations can be defined here
  };
  return ManifestionCardioVasculaire;
};
