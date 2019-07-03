'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestationCognitives', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      alterationMemoireTravail: {
        type: Sequelize.BOOLEAN
      },
      difficulteCoordinationMouvement: {
        type: Sequelize.BOOLEAN
      },
      troubleMemoire: {
        type: Sequelize.BOOLEAN
      },
      ralentissementPensee: {
        type: Sequelize.BOOLEAN
      },
      oublis: {
        type: Sequelize.BOOLEAN
      },
      perteMot: {
        type: Sequelize.BOOLEAN
      },
      difficulteConcentration: {
        type: Sequelize.BOOLEAN
      },
      brouillardMental: {
        type: Sequelize.BOOLEAN
      },
      troubleOrientation: {
        type: Sequelize.BOOLEAN
      },
      troubleVisuoSpacial: {
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
    return queryInterface.dropTable('ManifestationCognitives');
  }
};