'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestionRespiratoires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      essouflementEffort: {
        type: Sequelize.BOOLEAN
      },
      essouflementRepos: {
        type: Sequelize.BOOLEAN
      },
      sensationBlocageDiaphragmatique: {
        type: Sequelize.BOOLEAN
      },
      bradyapnee: {
        type: Sequelize.BOOLEAN
      },
      tachyapnee: {
        type: Sequelize.BOOLEAN
      },
      respirationSifflante: {
        type: Sequelize.BOOLEAN
      },
      criseRespiratoireAngoissante: {
        type: Sequelize.BOOLEAN
      },
      sensationOppressionThoracique: {
        type: Sequelize.BOOLEAN
      },
      encombrementBronchique: {
        type: Sequelize.BOOLEAN
      },
      glaireFondGorge: {
        type: Sequelize.BOOLEAN
      },
      expectorationSanglante: {
        type: Sequelize.BOOLEAN
      },
      blocageRespiratoire: {
        type: Sequelize.BOOLEAN
      },
      criseAsthme: {
        type: Sequelize.BOOLEAN
      },
      touxSeche: {
        type: Sequelize.BOOLEAN
      },
      touxGrasse: {
        type: Sequelize.BOOLEAN
      },
      dysphonie: {
        type: Sequelize.BOOLEAN
      },
      aphonie: {
        type: Sequelize.BOOLEAN
      },
      douleurRespiratoire: {
        type: Sequelize.BOOLEAN
      },
      infectionVoieAerienneSuperieur: {
        type: Sequelize.BOOLEAN
      },
      bronchite: {
        type: Sequelize.BOOLEAN
      },
      pneumopathie: {
        type: Sequelize.BOOLEAN
      },
      saturationOxygene: {
        type: Sequelize.INTEGER
      },
      commentaire: {
        type: Sequelize.STRING
      },
      dateDuJour: {
          type: Sequelize.DATE,
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
    return queryInterface.dropTable('ManifestionRespiratoires');
  }
};
