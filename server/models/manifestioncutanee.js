'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManifestionCutanee = sequelize.define('ManifestionCutanee', {
    eruptionCutanee: DataTypes.BOOLEAN,
    secheresseCutanee: DataTypes.BOOLEAN,
    ecchymoseApresChoc: DataTypes.BOOLEAN,
    ecchymoseSpontanee: DataTypes.BOOLEAN,
    plaie: DataTypes.BOOLEAN,
    hyperhydrose: DataTypes.BOOLEAN,
    flush: DataTypes.BOOLEAN,
    urticaire: DataTypes.BOOLEAN,
    eczema: DataTypes.BOOLEAN,
    psoriasis: DataTypes.BOOLEAN,
    demangeaison: DataTypes.BOOLEAN,
    hematome: DataTypes.BOOLEAN,
    furoncle: DataTypes.BOOLEAN,
    dyshydrose: DataTypes.BOOLEAN,
    pousseeAcnee: DataTypes.BOOLEAN,
    pousseeBoutonNonIndentifie: DataTypes.BOOLEAN,
    crevasse: DataTypes.BOOLEAN,
    engelure: DataTypes.BOOLEAN,
    desquamation: DataTypes.BOOLEAN,
    gercure: DataTypes.BOOLEAN,
    plaqueRouge: DataTypes.BOOLEAN,
    irritation: DataTypes.BOOLEAN,
    boutonChaleur: DataTypes.BOOLEAN,
    brulure: DataTypes.BOOLEAN,
    apparitionPetechis: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING,
      dateDuJour: DataTypes.DATE,
      idUtilisateur: DataTypes.INTEGER
  }, {});
  ManifestionCutanee.associate = function(models) {
    // associations can be defined here
  };
  return ManifestionCutanee;
};
