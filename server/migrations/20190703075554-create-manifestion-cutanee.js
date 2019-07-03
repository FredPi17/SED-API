'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestionCutanees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eruptionCutanee: {
        type: Sequelize.BOOLEAN
      },
      secheresseCutanee: {
        type: Sequelize.BOOLEAN
      },
      ecchymoseApresChoc: {
        type: Sequelize.BOOLEAN
      },
      ecchymoseSpontanee: {
        type: Sequelize.BOOLEAN
      },
      plaie: {
        type: Sequelize.BOOLEAN
      },
      hyperhydrose: {
        type: Sequelize.BOOLEAN
      },
      flush: {
        type: Sequelize.BOOLEAN
      },
      urticaire: {
        type: Sequelize.BOOLEAN
      },
      eczema: {
        type: Sequelize.BOOLEAN
      },
      psoriasis: {
        type: Sequelize.BOOLEAN
      },
      demangeaison: {
        type: Sequelize.BOOLEAN
      },
      hematome: {
        type: Sequelize.BOOLEAN
      },
      furoncle: {
        type: Sequelize.BOOLEAN
      },
      dyshydrose: {
        type: Sequelize.BOOLEAN
      },
      pousseeAcnee: {
        type: Sequelize.BOOLEAN
      },
      pousseeBoutonNonIndentifie: {
        type: Sequelize.BOOLEAN
      },
      crevasse: {
        type: Sequelize.BOOLEAN
      },
      engelure: {
        type: Sequelize.BOOLEAN
      },
      desquamation: {
        type: Sequelize.BOOLEAN
      },
      gercure: {
        type: Sequelize.BOOLEAN
      },
      plaqueRouge: {
        type: Sequelize.BOOLEAN
      },
      irritation: {
        type: Sequelize.BOOLEAN
      },
      boutonChaleur: {
        type: Sequelize.BOOLEAN
      },
      brulure: {
        type: Sequelize.BOOLEAN
      },
      apparitionPetechis: {
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
    return queryInterface.dropTable('ManifestionCutanees');
  }
};
