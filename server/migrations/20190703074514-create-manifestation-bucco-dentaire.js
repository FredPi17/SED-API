'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestationBuccoDentaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      douleurDentaire: {
        type: Sequelize.BOOLEAN
      },
      douleurGingivale: {
        type: Sequelize.BOOLEAN
      },
      saignementgingival: {
        type: Sequelize.BOOLEAN
      },
      hypersensibiliteDentaire: {
        type: Sequelize.BOOLEAN
      },
      colletDentaireDouleur: {
        type: Sequelize.BOOLEAN
      },
      bruxisme: {
        type: Sequelize.BOOLEAN
      },
      gingivite: {
        type: Sequelize.BOOLEAN
      },
      anesthesiePasEfficace: {
        type: Sequelize.BOOLEAN
      },
      alterationGencive: {
        type: Sequelize.BOOLEAN
      },
      dechaussementDentaire: {
        type: Sequelize.BOOLEAN
      },
      secheresseBuccale: {
        type: Sequelize.BOOLEAN
      },
      hypersialorhee: {
        type: Sequelize.BOOLEAN
      },
      boutonFievre: {
        type: Sequelize.BOOLEAN
      },
      mauvaiseHaleine: {
        type: Sequelize.BOOLEAN
      },
      aphte: {
        type: Sequelize.BOOLEAN
      },
      abces: {
        type: Sequelize.BOOLEAN
      },
      parodontite: {
        type: Sequelize.BOOLEAN
      },
      emailErode: {
        type: Sequelize.BOOLEAN
      },
      carie: {
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
    return queryInterface.dropTable('ManifestationBuccoDentaires');
  }
};
