'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestionCardioVasculaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tachycardie: {
        type: Sequelize.BOOLEAN
      },
      tachycardieNb: {
        type: Sequelize.INTEGER
      },
      bradycardie: {
        type: Sequelize.BOOLEAN
      },
      bradycardieNb: {
        type: Sequelize.INTEGER
      },
      hypertension: {
        type: Sequelize.BOOLEAN
      },
      hypertensionNb: {
        type: Sequelize.INTEGER
      },
      hypotension: {
        type: Sequelize.BOOLEAN
      },
      hypotensionNb: {
        type: Sequelize.INTEGER
      },
      tachycardiePosturale: {
        type: Sequelize.BOOLEAN
      },
      tachycardiePosturaleNb: {
        type: Sequelize.INTEGER
      },
      palpitation: {
        type: Sequelize.BOOLEAN
      },
      arythmie: {
        type: Sequelize.BOOLEAN
      },
      marbrures: {
        type: Sequelize.BOOLEAN
      },
      extremiteFroideEtPale: {
        type: Sequelize.BOOLEAN
      },
      malaise: {
        type: Sequelize.BOOLEAN
      },
      varice: {
        type: Sequelize.BOOLEAN
      },
      syncope: {
        type: Sequelize.BOOLEAN
      },
      doigtEnfle: {
        type: Sequelize.BOOLEAN
      },
      phlebite: {
        type: Sequelize.BOOLEAN
      },
      gonflementJambeChevillePieds: {
        type: Sequelize.BOOLEAN
      },
      syndromeReynaud: {
        type: Sequelize.BOOLEAN
      },
      essouflement: {
        type: Sequelize.BOOLEAN
      },
      douleurThoracique: {
        type: Sequelize.BOOLEAN
      },
      evanouissement: {
        type: Sequelize.BOOLEAN
      },
      systole: {
        type: Sequelize.INTEGER
      },
      diastole: {
        type: Sequelize.INTEGER
      },
      pouls: {
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
    return queryInterface.dropTable('ManifestionCardioVasculaires');
  }
};
