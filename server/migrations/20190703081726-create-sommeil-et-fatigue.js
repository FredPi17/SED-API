'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SommeilEtFatigue', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fatigue: {
        type: Sequelize.BOOLEAN
      },
      fatigueNb: {
        type: Sequelize.INTEGER
      },
      asthenie: {
        type: Sequelize.BOOLEAN
      },
      sommeilNonReparateur: {
        type: Sequelize.BOOLEAN
      },
      insomnie: {
        type: Sequelize.BOOLEAN
      },
      hypersomnie: {
        type: Sequelize.BOOLEAN
      },
      apneeSommeil: {
        type: Sequelize.BOOLEAN
      },
      ronflement: {
        type: Sequelize.BOOLEAN
      },
      somnolence: {
        type: Sequelize.BOOLEAN
      },
      cauchemar: {
        type: Sequelize.BOOLEAN
      },
      sommeilAgite: {
        type: Sequelize.BOOLEAN
      },
      reveilPrecoceSansRendormissement: {
        type: Sequelize.BOOLEAN
      },
      sueurNocturne: {
        type: Sequelize.BOOLEAN
      },
      syndromeJambeSansRepos: {
        type: Sequelize.BOOLEAN
      },
      reveilFrequent: {
        type: Sequelize.BOOLEAN
      },
      difficulteEndormissement: {
        type: Sequelize.BOOLEAN
      },
      nycturie: {
        type: Sequelize.BOOLEAN
      },
      coupDeFatigue: {
        type: Sequelize.BOOLEAN
      },
      sieste: {
        type: Sequelize.BOOLEAN
      },
      siesteNb: {
        type: Sequelize.INTEGER
      },
      somnambulisme: {
        type: Sequelize.BOOLEAN
      },
      terreurNocturne: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('SommeilEtFatigue');
  }
};
