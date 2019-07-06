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
            BULeucocyte: {
                type: Sequelize.STRING
            },
            BUNitrite: {
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
            BUUrobilinogene: {
                type: Sequelize.STRING
            },
            BUCetone: {
                type: Sequelize.STRING
            },
            BUDensite: {
                type: Sequelize.STRING
            },
            BUPH: {
                type: Sequelize.STRING
            },
            BUAcideAscorbique: {
                type: Sequelize.STRING
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
            urineTrouble: {
                type: Sequelize.BOOLEAN
            },
            urineMalodorante: {
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
            gouttesRetardataire: {
                type: Sequelize.BOOLEAN
            },
            diminutionBesoinUriner: {
                type: Sequelize.BOOLEAN
            },
            retentionUrinaire: {
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
        return queryInterface.dropTable('ManifestationUrinaires');
    }
};
