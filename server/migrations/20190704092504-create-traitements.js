'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Traitements', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nom: {
                type: Sequelize.STRING
            },
            posologie: {
                type: Sequelize.STRING
            },
            quantite: {
                type: Sequelize.STRING
            },
            nbParJour: {
                type: Sequelize.STRING
            },
            dateDebut: {
                type: Sequelize.DATE
            },
            dateDeFin: {
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
        return queryInterface.dropTable('Traitements');
    }
};
