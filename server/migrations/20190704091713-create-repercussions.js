'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Repercussions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            sommeil: {
                type: Sequelize.STRING
            },
            agmentationAppetit: {
                type: Sequelize.STRING
            },
            perteAppetit: {
                type: Sequelize.STRING
            },
            marche: {
                type: Sequelize.STRING
            },
            diffSupporterPosAssiseProl: {
                type: Sequelize.STRING
            },
            diffSupporterPosDebProl: {
                type: Sequelize.STRING
            },
            deplacementVoiture: {
                type: Sequelize.STRING
            },
            limitDeplacementDomicile: {
                type: Sequelize.STRING
            },
            limitDeplacementExterieur: {
                type: Sequelize.STRING
            },
            escaliers: {
                type: Sequelize.STRING
            },
            habillement: {
                type: Sequelize.STRING
            },
            soinsHygieneCorp: {
                type: Sequelize.STRING
            },
            seLever: {
                type: Sequelize.STRING
            },
            tachesQuot: {
                type: Sequelize.STRING
            },
            entretienDomicile: {
                type: Sequelize.STRING
            },
            activitePro: {
                type: Sequelize.STRING
            },
            loisirs: {
                type: Sequelize.STRING
            },
            activiteManuelle: {
                type: Sequelize.STRING
            },
            suivreEmissionRadioTV: {
                type: Sequelize.STRING
            },
            parler: {
                type: Sequelize.STRING
            },
            suivreConversation: {
                type: Sequelize.STRING
            },
            vieSociale: {
                type: Sequelize.STRING
            },
            vieFamiliale: {
                type: Sequelize.STRING
            },
            intimite: {
                type: Sequelize.STRING
            },
            desirSexuel: {
                type: Sequelize.STRING
            },
            moral: {
                type: Sequelize.STRING
            },
            anxiete: {
                type: Sequelize.STRING
            },
            irritabilite: {
                type: Sequelize.STRING
            },
            maitriseSoi: {
                type: Sequelize.STRING
            },
            renfermement: {
                type: Sequelize.STRING
            },
            souffranceMoral: {
                type: Sequelize.STRING
            },
            confusion: {
                type: Sequelize.STRING
            },
            angoisse: {
                type: Sequelize.STRING
            },
            concentration: {
                type: Sequelize.STRING
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
        return queryInterface.dropTable('Repercussions');
    }
};
