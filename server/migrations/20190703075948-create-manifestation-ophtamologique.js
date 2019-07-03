'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestationOphtamologiques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      secheresseOculaire: {
        type: Sequelize.BOOLEAN
      },
      larmoiement: {
        type: Sequelize.BOOLEAN
      },
      douleurOculaire: {
        type: Sequelize.STRING
      },
      douleurArriereOeil: {
        type: Sequelize.BOOLEAN
      },
      sensibiliteLumiere: {
        type: Sequelize.BOOLEAN
      },
      corpsFlottant: {
        type: Sequelize.BOOLEAN
      },
      fatigueVisuelle: {
        type: Sequelize.BOOLEAN
      },
      flouVisuel: {
        type: Sequelize.BOOLEAN
      },
      diplopie: {
        type: Sequelize.BOOLEAN
      },
      baisseAcuiteVisuelPassagere: {
        type: Sequelize.BOOLEAN
      },
      yeuxRouge: {
        type: Sequelize.BOOLEAN
      },
      demangeaisonOculaire: {
        type: Sequelize.BOOLEAN
      },
      heterophorie: {
        type: Sequelize.BOOLEAN
      },
      conjonctiviteAllergique: {
        type: Sequelize.BOOLEAN
      },
      conjonctivite: {
        type: Sequelize.BOOLEAN
      },
      blepharite: {
        type: Sequelize.BOOLEAN
      },
      keratocone: {
        type: Sequelize.BOOLEAN
      },
      migraineOphtalmique: {
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
    return queryInterface.dropTable('ManifestationOphtamologiques');
  }
};
