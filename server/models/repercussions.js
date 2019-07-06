'use strict';
module.exports = (sequelize, DataTypes) => {
    const Repercussions = sequelize.define('Repercussions', {
        sommeil: DataTypes.STRING,
        agmentationAppetit: DataTypes.STRING,
        perteAppetit: DataTypes.STRING,
        marche: DataTypes.STRING,
        diffSupporterPosAssiseProl: DataTypes.STRING,
        diffSupporterPosDebProl: DataTypes.STRING,
        deplacementVoiture: DataTypes.STRING,
        limitDeplacementDomicile: DataTypes.STRING,
        limitDeplacementExterieur: DataTypes.STRING,
        escaliers: DataTypes.STRING,
        habillement: DataTypes.STRING,
        soinsHygieneCorp: DataTypes.STRING,
        seLever: DataTypes.STRING,
        tachesQuot: DataTypes.STRING,
        entretienDomicile: DataTypes.STRING,
        activitePro: DataTypes.STRING,
        loisirs: DataTypes.STRING,
        activiteManuelle: DataTypes.STRING,
        suivreEmissionRadioTV: DataTypes.STRING,
        parler: DataTypes.STRING,
        suivreConversation: DataTypes.STRING,
        vieSociale: DataTypes.STRING,
        vieFamiliale: DataTypes.STRING,
        intimite: DataTypes.STRING,
        desirSexuel: DataTypes.STRING,
        moral: DataTypes.STRING,
        anxiete: DataTypes.STRING,
        irritabilite: DataTypes.STRING,
        maitriseSoi: DataTypes.STRING,
        renfermement: DataTypes.STRING,
        souffranceMoral: DataTypes.STRING,
        confusion: DataTypes.STRING,
        angoisse: DataTypes.STRING,
        concentration: DataTypes.STRING,
        idUtilisateur: DataTypes.INTEGER
    }, {});
    Repercussions.associate = function (models) {
        // associations can be defined here
    };
    return Repercussions;
};
