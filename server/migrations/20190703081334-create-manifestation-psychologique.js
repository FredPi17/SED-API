'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestationPsychologiques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      anxiete: {
        type: Sequelize.BOOLEAN
      },
      criseAngoisse: {
        type: Sequelize.BOOLEAN
      },
      stress: {
        type: Sequelize.BOOLEAN
      },
      epuisementPsychique: {
        type: Sequelize.BOOLEAN
      },
      burnOut: {
        type: Sequelize.BOOLEAN
      },
      tensionInterne: {
        type: Sequelize.BOOLEAN
      },
      etatDepressif: {
        type: Sequelize.BOOLEAN
      },
      perteElanVital: {
        type: Sequelize.BOOLEAN
      },
      tristesseInhabituelle: {
        type: Sequelize.BOOLEAN
      },
      irritabilite: {
        type: Sequelize.BOOLEAN
      },
      hypersensibilite: {
        type: Sequelize.BOOLEAN
      },
      baisseMoral: {
        type: Sequelize.BOOLEAN
      },
      sauteHumeur: {
        type: Sequelize.BOOLEAN
      },
      envieDeRien: {
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
    return queryInterface.dropTable('ManifestationPsychologiques');
  }
};
