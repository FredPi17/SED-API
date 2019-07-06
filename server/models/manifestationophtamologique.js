'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManifestationOphtamologique = sequelize.define('ManifestationOphtamologique', {
    secheresseOculaire: DataTypes.BOOLEAN,
    larmoiement: DataTypes.BOOLEAN,
    douleurOculaire: DataTypes.STRING,
    douleurArriereOeil: DataTypes.BOOLEAN,
    sensibiliteLumiere: DataTypes.BOOLEAN,
    corpsFlottant: DataTypes.BOOLEAN,
    fatigueVisuelle: DataTypes.BOOLEAN,
    flouVisuel: DataTypes.BOOLEAN,
    diplopie: DataTypes.BOOLEAN,
    baisseAcuiteVisuelPassagere: DataTypes.BOOLEAN,
    yeuxRouge: DataTypes.BOOLEAN,
    demangeaisonOculaire: DataTypes.BOOLEAN,
    heterophorie: DataTypes.BOOLEAN,
    conjonctiviteAllergique: DataTypes.BOOLEAN,
    conjonctivite: DataTypes.BOOLEAN,
    blepharite: DataTypes.BOOLEAN,
    keratocone: DataTypes.BOOLEAN,
    migraineOphtalmique: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING,
      dateDuJour: DataTypes.DATE,
      idUtilisateur: DataTypes.INTEGER
  }, {});
  ManifestationOphtamologique.associate = function(models) {
    // associations can be defined here
  };
  return ManifestationOphtamologique;
};
