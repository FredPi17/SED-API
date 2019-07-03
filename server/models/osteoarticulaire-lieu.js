'use strict';
module.exports = (sequelize, DataTypes) => {
  const OsteoArticulaireLieu = sequelize.define('OsteoArticulaireLieu', {
    osteoArticulaire: DataTypes.STRING,
    idOsteoArticulaire: DataTypes.INTEGER,
    nom: DataTypes.STRING
  }, {});
  OsteoArticulaireLieu.associate = function(models) {
    // associations can be defined here
  };
  return OsteoArticulaireLieu;
};
