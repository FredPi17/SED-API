'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManifestionRespiratoire = sequelize.define('ManifestionRespiratoire', {
    essouflementEffort: DataTypes.BOOLEAN,
    essouflementRepos: DataTypes.BOOLEAN,
    sensationBlocageDiaphragmatique: DataTypes.BOOLEAN,
    bradyapnee: DataTypes.BOOLEAN,
    tachyapnee: DataTypes.BOOLEAN,
    respirationSifflante: DataTypes.BOOLEAN,
    criseRespiratoireAngoissante: DataTypes.BOOLEAN,
    sensationOppressionThoracique: DataTypes.BOOLEAN,
    encombrementBronchique: DataTypes.BOOLEAN,
    glaireFondGorge: DataTypes.BOOLEAN,
    expectorationSanglante: DataTypes.BOOLEAN,
    blocageRespiratoire: DataTypes.BOOLEAN,
    criseAsthme: DataTypes.BOOLEAN,
    touxSeche: DataTypes.BOOLEAN,
    touxGrasse: DataTypes.BOOLEAN,
    dysphonie: DataTypes.BOOLEAN,
    aphonie: DataTypes.BOOLEAN,
    douleurRespiratoire: DataTypes.BOOLEAN,
    infectionVoieAerienneSuperieur: DataTypes.BOOLEAN,
    bronchite: DataTypes.BOOLEAN,
    pneumopathie: DataTypes.BOOLEAN,
    saturationOxygene: DataTypes.INTEGER,
    commentaire: DataTypes.STRING,
    dateDuJour: DataTypes.DATE
  }, {});
  ManifestionRespiratoire.associate = function(models) {
    // associations can be defined here
  };
  return ManifestionRespiratoire;
};