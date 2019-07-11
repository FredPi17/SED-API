'use strict';
module.exports = (sequelize, DataTypes) => {
    const Traitements = sequelize.define('Traitements', {
        nom: DataTypes.STRING,
        posologie: DataTypes.STRING,
        dosage: DataTypes.STRING,
        isActive: DataTypes.BOOLEAN,
        dateDebut: DataTypes.DATE,
        dateDeFin: DataTypes.DATE,
        idUtilisateur: DataTypes.INTEGER
    }, {});
    Traitements.associate = function (models) {
        // associations can be defined here
    };
    return Traitements;
};
