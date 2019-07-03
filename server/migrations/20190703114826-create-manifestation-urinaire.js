'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestationUrinaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brulureMictionnelle: {
        type: Sequelize.BOOLEAN
      },
      douleurFosseLombaire: {
        type: Sequelize.BOOLEAN
      },
      infectionUrinaireSuspectee: {
        type: Sequelize.BOOLEAN
      },
      infectionUrinaireAveree: {
        type: Sequelize.BOOLEAN
      },
      pyelonephrite: {
        type: Sequelize.BOOLEAN
      },
      coliqueNephretique: {
        type: Sequelize.BOOLEAN
      },
      douleurVessie: {
        type: Sequelize.BOOLEAN
      },
      hematurieMacro: {
        type: Sequelize.BOOLEAN
      },
      hematurieMicro: {
        type: Sequelize.BOOLEAN
      },
      urineMalodorante: {
        type: Sequelize.BOOLEAN
      },
      urineTrouble: {
        type: Sequelize.BOOLEAN
      },
      nycturie: {
        type: Sequelize.BOOLEAN
      },
      fuiteUrinaire: {
        type: Sequelize.BOOLEAN
      },
      incontinenceEffort: {
        type: Sequelize.BOOLEAN
      },
      imperiosite: {
        type: Sequelize.BOOLEAN
      },
      goutteRetardataire: {
        type: Sequelize.BOOLEAN
      },
      diminutionBesoinUriner: {
        type: Sequelize.BOOLEAN
      },
      retentionUrine: {
        type: Sequelize.BOOLEAN
      },
      difficulteUriner: {
        type: Sequelize.BOOLEAN
      },
      impossibiliteUriner: {
        type: Sequelize.BOOLEAN
      },
      sensationVidangeComplete: {
        type: Sequelize.BOOLEAN
      },
      mictionDeuxTemps: {
        type: Sequelize.BOOLEAN
      },
      mictionPoussee: {
        type: Sequelize.BOOLEAN
      },
      BULeucocytes: {
        type: Sequelize.STRING
      },
      BUNitrites: {
        type: Sequelize.STRING
      },
      BUSang: {
        type: Sequelize.STRING
      },
      BUProteine: {
        type: Sequelize.STRING
      },
      BUGlucose: {
        type: Sequelize.STRING
      },
      BUBilirubine: {
        type: Sequelize.STRING
      },
      BUCetones: {
        type: Sequelize.STRING
      },
      BUDensite: {
        type: Sequelize.STRING
      },
      BUPH: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('ManifestationUrinaires');
  }
};
