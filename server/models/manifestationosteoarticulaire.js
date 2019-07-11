'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManifestationOsteoArticulaire = sequelize.define('ManifestationOsteoArticulaire', {
    craquemenArticulaire: DataTypes.INTEGER,
    entorse: DataTypes.INTEGER,
    subluxation: DataTypes.INTEGER,
    luxation: DataTypes.INTEGER,
    douleurArticulaire: DataTypes.INTEGER,
    douleurLigamentaire: DataTypes.INTEGER,
    douleurTendineuse: DataTypes.INTEGER,
    blocageArticulaire: DataTypes.INTEGER,
    dechirureTendineuse: DataTypes.INTEGER,
    dechirureLigamentaire: DataTypes.INTEGER,
    tendinite: DataTypes.INTEGER,
    discopathie: DataTypes.INTEGER,
    commentaire: DataTypes.STRING,
      dateDuJour: DataTypes.DATE,
      idUtilisateur: DataTypes.INTEGER
  }, {});
  ManifestationOsteoArticulaire.associate = function(models) {
    // associations can be defined here
  };
  return ManifestationOsteoArticulaire;
};
