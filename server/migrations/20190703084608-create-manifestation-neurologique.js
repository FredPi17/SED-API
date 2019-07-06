'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestationNeurologiques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      anesthesie: {
        type: Sequelize.INTEGER
      },
      hyperesthesie: {
        type: Sequelize.INTEGER
      },
      paralysie: {
        type: Sequelize.INTEGER
      },
      paresthesie: {
        type: Sequelize.INTEGER
      },
      fourmillement: {
        type: Sequelize.INTEGER
      },
      picotement: {
        type: Sequelize.INTEGER
      },
      engourdissement: {
        type: Sequelize.INTEGER
      },
      tremblement: {
        type: Sequelize.INTEGER
      },
      fasciculation: {
        type: Sequelize.INTEGER
      },
      tetanie: {
        type: Sequelize.INTEGER
      },
      spasme: {
        type: Sequelize.INTEGER
      },
      pseudoParalysie: {
        type: Sequelize.INTEGER
      },
      nevralgie: {
        type: Sequelize.INTEGER
      },
      hypertonieMusculaire: {
        type: Sequelize.INTEGER
      },
      hypotonieMusculaire: {
        type: Sequelize.INTEGER
      },
      douleurNeuropathique: {
        type: Sequelize.INTEGER
      },
      commentaire: {
        type: Sequelize.STRING
      },
      dateDuJour: {
        type: Sequelize.DATE
      },
        idUtilisateur: {
            type: Sequelize.INTEGER
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
    return queryInterface.dropTable('ManifestationNeurologiques');
  }
};
