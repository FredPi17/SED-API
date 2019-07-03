'use strict';

export default (sequelize, DataTypes) => {
    const ManifestionDigestive = sequelize.define('ManifestionDigestive', {
        dysphagie: DataTypes.BOOLEAN,
        fausseRoute: DataTypes.BOOLEAN,
        rgo: DataTypes.BOOLEAN,
        regurgitation: DataTypes.BOOLEAN,
        sensationBrulureOesophage: DataTypes.BOOLEAN,
        mauvaiseHaleine: DataTypes.BOOLEAN,
        eructation: DataTypes.BOOLEAN,
        nausees: DataTypes.BOOLEAN,
        vomissements: DataTypes.BOOLEAN,
        pesanteurGastrique: DataTypes.BOOLEAN,
        indigestion: DataTypes.BOOLEAN,
        gastroParesie: DataTypes.BOOLEAN,
        brulureEstomac: DataTypes.BOOLEAN,
        ballonements: DataTypes.BOOLEAN,
        aerophagie: DataTypes.BOOLEAN,
        douleurAbdominale: DataTypes.BOOLEAN,
        douleurEpigastrique: DataTypes.BOOLEAN,
        crampeIntestinale: DataTypes.BOOLEAN,
        estomacGonfle: DataTypes.BOOLEAN,
        satietePrecoce: DataTypes.BOOLEAN,
        perteAppetit: DataTypes.BOOLEAN,
        soifPermanente: DataTypes.BOOLEAN,
        impossibiliteAlimenter: DataTypes.BOOLEAN,
        absenceSatiete: DataTypes.BOOLEAN,
        sensationFaimDouloureuse: DataTypes.BOOLEAN,
        hypoglycemieReactionnelle: DataTypes.BOOLEAN,
        gaz: DataTypes.BOOLEAN,
        constipation: DataTypes.BOOLEAN,
        selleLiquide: DataTypes.BOOLEAN,
        spasmeIntestinaux: DataTypes.BOOLEAN,
        douleurVesiculaire: DataTypes.BOOLEAN,
        imperiositeFecale: DataTypes.BOOLEAN,
        amaigrissement: DataTypes.BOOLEAN,
        prisePoids: DataTypes.BOOLEAN,
        saignementDigestifHaut: DataTypes.BOOLEAN,
        saignementDigestifBas: DataTypes.BOOLEAN,
        criseHemorroide: DataTypes.BOOLEAN,
        commentaire: DataTypes.STRING,
        dateDuJour: DataTypes.DATE,

    }, {});
    ManifestionDigestive.associate = function (models) {
        // associations can be defined here
    };
    return ManifestionDigestive;
};
