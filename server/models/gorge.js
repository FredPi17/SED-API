'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gorge = sequelize.define('Gorge', {
    mauxGorge: DataTypes.BOOLEAN,
    gorgeQuiGratte: DataTypes.BOOLEAN,
    gorgeIrritee: DataTypes.BOOLEAN,
    douleurAigueGorge: DataTypes.BOOLEAN,
    deglutitionDouloureuse: DataTypes.BOOLEAN,
    troubleGout: DataTypes.BOOLEAN,
    raclementGorge: DataTypes.BOOLEAN,
    ecoulementArriereGorge: DataTypes.BOOLEAN,
    dysphonie: DataTypes.BOOLEAN,
    aphonie: DataTypes.BOOLEAN,
    enrouement: DataTypes.BOOLEAN,
    angine: DataTypes.BOOLEAN,
    pharyngite: DataTypes.BOOLEAN,
    laryngite: DataTypes.BOOLEAN,
    tracheite: DataTypes.BOOLEAN,
    adenopathie: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING,
      dateDuJour: DataTypes.DATE,
      idUtilisateur: DataTypes.INTEGER
  }, {});
  Gorge.associate = function(models) {
    // associations can be defined here
  };
  return Gorge;
};
