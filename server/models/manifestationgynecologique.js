'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManifestationGynecologique = sequelize.define('ManifestationGynecologique', {
    premierJourRegle: DataTypes.BOOLEAN,
    dernierJourRegle: DataTypes.BOOLEAN,
    douleurMenstruelle: DataTypes.BOOLEAN,
    spotting: DataTypes.BOOLEAN,
    regleAbondante: DataTypes.BOOLEAN,
    metrorragie: DataTypes.BOOLEAN,
    saignementPostCoitale: DataTypes.BOOLEAN,
    amenorrhee: DataTypes.BOOLEAN,
    secheresseVaginale: DataTypes.BOOLEAN,
    demangeaisonVulvaire: DataTypes.BOOLEAN,
    irritationVulvaire: DataTypes.BOOLEAN,
    fissureVulvaire: DataTypes.BOOLEAN,
    dyspareunieSuperficielle: DataTypes.BOOLEAN,
    dyspareunieProfonde: DataTypes.BOOLEAN,
    douleurPelvienne: DataTypes.BOOLEAN,
    douleurPelvienneNb: DataTypes.INTEGER,
    aggravationEtatMenstruation: DataTypes.BOOLEAN,
    fibrome: DataTypes.BOOLEAN,
    kysteOvarien: DataTypes.BOOLEAN,
    infectionVaginale: DataTypes.BOOLEAN,
    barthonolite: DataTypes.BOOLEAN,
    mycose: DataTypes.BOOLEAN,
    fausseCouche: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING,
      dateDuJour: DataTypes.DATE,
      idUtilisateur: DataTypes.INTEGER
  }, {});
  ManifestationGynecologique.associate = function(models) {
    // associations can be defined here
  };
  return ManifestationGynecologique;
};
