'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestationMusculaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      myalgieDiffuse: {
        type: Sequelize.BOOLEAN
      },
      fatigueMusculaire: {
        type: Sequelize.BOOLEAN
      },
      crampe: {
        type: Sequelize.BOOLEAN
      },
      faiblesseMusculaire: {
        type: Sequelize.BOOLEAN
      },
      spasmeMusculaire: {
        type: Sequelize.BOOLEAN
      },
      contracture: {
        type: Sequelize.BOOLEAN
      },
      courbature: {
        type: Sequelize.BOOLEAN
      },
      dystonie: {
        type: Sequelize.BOOLEAN
      },
      hypertonie: {
        type: Sequelize.BOOLEAN
      },
      hypotonie: {
        type: Sequelize.BOOLEAN
      },
      fasciculation: {
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
    return queryInterface.dropTable('ManifestationMusculaires');
  }
};