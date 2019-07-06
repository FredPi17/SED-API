'use strict';
module.exports = (sequelize, DataTypes) => {
    const ManifestationUrinaire = sequelize.define('ManifestationUrinaire', {
        brulureMictionnelle: DataTypes.BOOLEAN,
        douleurFosseLombaire: DataTypes.BOOLEAN,
        infectionUrinaireSuspectee: DataTypes.BOOLEAN,
        infectionUrinaireAveree: DataTypes.BOOLEAN,
        pyelonephrite: DataTypes.BOOLEAN,
        coliqueNephretique: DataTypes.BOOLEAN,
        BULeucocyte: DataTypes.STRING,
        BUNitrite: DataTypes.STRING,
        BUSang: DataTypes.STRING,
        BUProteine: DataTypes.STRING,
        BUGlucose: DataTypes.STRING,
        BUBilirubine: DataTypes.STRING,
        BUUrobilinogene: DataTypes.STRING,
        BUCetone: DataTypes.STRING,
        BUDensite: DataTypes.STRING,
        BUPH: DataTypes.STRING,
        BUAcideAscorbique: DataTypes.STRING,
        douleurVessie: DataTypes.BOOLEAN,
        hematurieMacro: DataTypes.BOOLEAN,
        hematurieMicro: DataTypes.BOOLEAN,
        urineTrouble: DataTypes.BOOLEAN,
        urineMalodorante: DataTypes.BOOLEAN,
        nycturie: DataTypes.BOOLEAN,
        fuiteUrinaire: DataTypes.BOOLEAN,
        incontinenceEffort: DataTypes.BOOLEAN,
        imperiosite: DataTypes.BOOLEAN,
        gouttesRetardataire: DataTypes.BOOLEAN,
        diminutionBesoinUriner: DataTypes.BOOLEAN,
        retentionUrinaire: DataTypes.BOOLEAN,
        difficulteUriner: DataTypes.BOOLEAN,
        impossibiliteUriner: DataTypes.BOOLEAN,
        sensationVidangeComplete: DataTypes.BOOLEAN,
        mictionDeuxTemps: DataTypes.BOOLEAN,
        mictionPoussee: DataTypes.BOOLEAN,
        commentaire: DataTypes.STRING,
        dateDuJour: DataTypes.DATE,
        idUtilisateur: DataTypes.INTEGER
    }, {});
    ManifestationUrinaire.associate = function (models) {
        // associations can be defined here
    };
    return ManifestationUrinaire;
};
