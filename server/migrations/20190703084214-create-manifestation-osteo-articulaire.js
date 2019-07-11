'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestationOsteoArticulaires', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      craquemenArticulaire: {
        type: Sequelize.INTEGER
      },
      entorse: {
        type: Sequelize.INTEGER
      },
      subluxation: {
        type: Sequelize.INTEGER
      },
      luxation: {
        type: Sequelize.INTEGER
      },
      douleurArticulaire: {
        type: Sequelize.INTEGER
      },
      douleurLigamentaire: {
        type: Sequelize.INTEGER
      },
      douleurTendineuse: {
        type: Sequelize.INTEGER
      },
      blocageArticulaire: {
        type: Sequelize.INTEGER
      },
      dechirureTendineuse: {
        type: Sequelize.INTEGER
      },
      dechirureLigamentaire: {
        type: Sequelize.INTEGER
      },
      tendinite: {
        type: Sequelize.INTEGER
      },
      discopathie: {
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
    return queryInterface.dropTable('ManifestationOsteoArticulaires');
  }
};
