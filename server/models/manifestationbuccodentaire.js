'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManifestationBuccoDentaire = sequelize.define('ManifestationBuccoDentaire', {
    douleurDentaire: DataTypes.BOOLEAN,
    douleurGingivale: DataTypes.BOOLEAN,
    saignementgingival: DataTypes.BOOLEAN,
    hypersensibiliteDentaire: DataTypes.BOOLEAN,
    colletDentaireDouleur: DataTypes.BOOLEAN,
    bruxisme: DataTypes.BOOLEAN,
    gingivite: DataTypes.BOOLEAN,
    anesthesiePasEfficace: DataTypes.BOOLEAN,
    alterationGencive: DataTypes.BOOLEAN,
    dechaussementDentaire: DataTypes.BOOLEAN,
    secheresseBuccale: DataTypes.BOOLEAN,
    hypersialorhee: DataTypes.BOOLEAN,
    boutonFievre: DataTypes.BOOLEAN,
    mauvaiseHaleine: DataTypes.BOOLEAN,
    aphte: DataTypes.BOOLEAN,
    abces: DataTypes.BOOLEAN,
    parodontite: DataTypes.BOOLEAN,
    emailErode: DataTypes.BOOLEAN,
    carie: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING,
      dateDuJour: DataTypes.DATE,
      idUtilisateur: DataTypes.INTEGER
  }, {});
  ManifestationBuccoDentaire.associate = function(models) {
    // associations can be defined here
  };
  return ManifestationBuccoDentaire;
};
