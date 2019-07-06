'use strict';
module.exports = (sequelize, DataTypes) => {
  const ManifestationORL = sequelize.define('ManifestationORL', {
    nezBouche: DataTypes.BOOLEAN,
    ecoulementNasalTranslucide: DataTypes.BOOLEAN,
    ecoulementNasalePurulent: DataTypes.BOOLEAN,
    saignementNez: DataTypes.BOOLEAN,
    secheresseNasale: DataTypes.BOOLEAN,
    troubleOdorat: DataTypes.STRING,
    plaieNasale: DataTypes.BOOLEAN,
    rhyniteAllergique: DataTypes.BOOLEAN,
    rhyniteNonAllergique: DataTypes.BOOLEAN,
    pesanteurFaciale: DataTypes.BOOLEAN,
    douleurOsFace: DataTypes.BOOLEAN,
    sinusiteChronique: DataTypes.BOOLEAN,
    commentaire: DataTypes.STRING,
      dateDuJour: DataTypes.DATE,
      idUtilisateur: DataTypes.INTEGER
  }, {});
  ManifestationORL.associate = function(models) {
    // associations can be defined here
  };
  return ManifestationORL;
};
