'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManifestationNeurologique = sequelize.define('ManifestationNeurologique', {
    anesthesie: DataTypes.INTEGER,
    hyperesthesie: DataTypes.INTEGER,
    paralysie: DataTypes.INTEGER,
    paresthesie: DataTypes.INTEGER,
    fourmillement: DataTypes.INTEGER,
    picotement: DataTypes.INTEGER,
    engourdissement: DataTypes.INTEGER,
    tremblement: DataTypes.INTEGER,
    fasciculation: DataTypes.INTEGER,
    tetanie: DataTypes.INTEGER,
    spasme: DataTypes.INTEGER,
    pseudoParalysie: DataTypes.INTEGER,
    nevralgie: DataTypes.INTEGER,
    hypertonieMusculaire: DataTypes.INTEGER,
    hypotonieMusculaire: DataTypes.INTEGER,
    douleurNeuropathique: DataTypes.INTEGER,
    commentaire: DataTypes.STRING,
      dateDuJour: DataTypes.DATE,
      idUtilisateur: DataTypes.INTEGER
  }, {});
  ManifestationNeurologique.associate = function(models) {
    // associations can be defined here
  };
  return ManifestationNeurologique;
};
