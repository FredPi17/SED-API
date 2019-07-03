'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestationGynecologiques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      premierJourRegle: {
        type: Sequelize.BOOLEAN
      },
      dernierJourRegle: {
        type: Sequelize.BOOLEAN
      },
      douleurMenstruelle: {
        type: Sequelize.BOOLEAN
      },
      spotting: {
        type: Sequelize.BOOLEAN
      },
      regleAbondante: {
        type: Sequelize.BOOLEAN
      },
      metrorragie: {
        type: Sequelize.BOOLEAN
      },
      saignementPostCoitale: {
        type: Sequelize.BOOLEAN
      },
      amenorrhee: {
        type: Sequelize.BOOLEAN
      },
      secheresseVaginale: {
        type: Sequelize.BOOLEAN
      },
      demangeaisonVulvaire: {
        type: Sequelize.BOOLEAN
      },
      irritationVulvaire: {
        type: Sequelize.BOOLEAN
      },
      fissureVulvaire: {
        type: Sequelize.BOOLEAN
      },
      dyspareunieSuperficielle: {
        type: Sequelize.BOOLEAN
      },
      dyspareunieProfonde: {
        type: Sequelize.BOOLEAN
      },
      douleurPelvienne: {
        type: Sequelize.BOOLEAN
      },
      douleurPelvienneNb: {
        type: Sequelize.INTEGER
      },
      aggravationEtatMenstruation: {
        type: Sequelize.BOOLEAN
      },
      fibrome: {
        type: Sequelize.BOOLEAN
      },
      kysteOvarien: {
        type: Sequelize.BOOLEAN
      },
      infectionVaginale: {
        type: Sequelize.BOOLEAN
      },
      barthonolite: {
        type: Sequelize.BOOLEAN
      },
      mycose: {
        type: Sequelize.BOOLEAN
      },
      fausseCouche: {
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
    return queryInterface.dropTable('ManifestationGynecologiques');
  }
};