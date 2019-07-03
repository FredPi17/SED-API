'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestationORL', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nezBouche: {
        type: Sequelize.BOOLEAN
      },
      ecoulementNasalTranslucide: {
        type: Sequelize.BOOLEAN
      },
      ecoulementNasalePurulent: {
        type: Sequelize.BOOLEAN
      },
      saignementNez: {
        type: Sequelize.BOOLEAN
      },
      secheresseNasale: {
        type: Sequelize.BOOLEAN
      },
      troubleOdorat: {
        type: Sequelize.STRING
      },
      plaieNasale: {
        type: Sequelize.BOOLEAN
      },
      rhyniteAllergique: {
        type: Sequelize.BOOLEAN
      },
      rhyniteNonAllergique: {
        type: Sequelize.BOOLEAN
      },
      pesanteurFaciale: {
        type: Sequelize.BOOLEAN
      },
      douleurOsFace: {
        type: Sequelize.BOOLEAN
      },
      sinusiteChronique: {
        type: Sequelize.BOOLEAN
      },
      commentaire: {
        type: Sequelize.STRING
      },
      dateDuJour: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ManifestationORL');
  }
};
