'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Oreilles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hyperacousie: {
        type: Sequelize.BOOLEAN
      },
      hypoacousie: {
        type: Sequelize.BOOLEAN
      },
      acouphene: {
        type: Sequelize.BOOLEAN
      },
      bourdonnement: {
        type: Sequelize.BOOLEAN
      },
      saignementOreille: {
        type: Sequelize.BOOLEAN
      },
      ecoulementOreille: {
        type: Sequelize.BOOLEAN
      },
      otite: {
        type: Sequelize.BOOLEAN
      },
      vertigeVrai: {
        type: Sequelize.BOOLEAN
      },
      sensationVertige: {
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
    return queryInterface.dropTable('Oreilles');
  }
};