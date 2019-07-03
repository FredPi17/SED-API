'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Gorge', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mauxGorge: {
        type: Sequelize.BOOLEAN
      },
      gorgeQuiGratte: {
        type: Sequelize.BOOLEAN
      },
      gorgeIrritee: {
        type: Sequelize.BOOLEAN
      },
      douleurAigueGorge: {
        type: Sequelize.BOOLEAN
      },
      deglutitionDouloureuse: {
        type: Sequelize.BOOLEAN
      },
      troubleGout: {
        type: Sequelize.BOOLEAN
      },
      raclementGorge: {
        type: Sequelize.BOOLEAN
      },
      ecoulementArriereGorge: {
        type: Sequelize.BOOLEAN
      },
      dysphonie: {
        type: Sequelize.BOOLEAN
      },
      aphonie: {
        type: Sequelize.BOOLEAN
      },
      enrouement: {
        type: Sequelize.BOOLEAN
      },
      angine: {
        type: Sequelize.BOOLEAN
      },
      pharyngite: {
        type: Sequelize.BOOLEAN
      },
      laryngite: {
        type: Sequelize.BOOLEAN
      },
      tracheite: {
        type: Sequelize.BOOLEAN
      },
      adenopathie: {
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
    return queryInterface.dropTable('Gorge');
  }
};
