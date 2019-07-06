'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ManifestionDigestive', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dysphagie: {
        type: Sequelize.BOOLEAN
      },
      fausseRoute: {
        type: Sequelize.BOOLEAN
      },
      rgo: {
        type: Sequelize.BOOLEAN
      },
      regurgitation: {
        type: Sequelize.BOOLEAN
      },
      sensationBrulureOesophage: {
        type: Sequelize.BOOLEAN
      },
      mauvaiseHaleine: {
        type: Sequelize.BOOLEAN
      },
      eructation: {
        type: Sequelize.BOOLEAN
      },
      nausees: {
        type: Sequelize.BOOLEAN
      },
      vomissements: {
        type: Sequelize.BOOLEAN
      },
      pesanteurGastrique: {
        type: Sequelize.BOOLEAN
      },
      indigestion: {
        type: Sequelize.BOOLEAN
      },
      gastroParesie: {
        type: Sequelize.BOOLEAN
      },
      brulureEstomac: {
        type: Sequelize.BOOLEAN
      },
      ballonements: {
        type: Sequelize.BOOLEAN
      },
      aerophagie: {
        type: Sequelize.BOOLEAN
      },
      douleurAbdominale: {
        type: Sequelize.BOOLEAN
      },
      douleurEpigastrique: {
        type: Sequelize.BOOLEAN
      },
      crampeIntestinale: {
        type: Sequelize.BOOLEAN
      },
      estomacGonfle: {
        type: Sequelize.BOOLEAN
      },
      satietePrecoce: {
        type: Sequelize.BOOLEAN
      },
      perteAppetit: {
        type: Sequelize.BOOLEAN
      },
      soifPermanente: {
        type: Sequelize.BOOLEAN
      },
      impossibiliteAlimenter: {
        type: Sequelize.BOOLEAN
      },
      absenceSatiete: {
        type: Sequelize.BOOLEAN
      },
      sensationFaimDouloureuse: {
        type: Sequelize.BOOLEAN
      },
      hypoglycemieReactionnelle: {
        type: Sequelize.BOOLEAN
      },
      gaz: {
        type: Sequelize.BOOLEAN
      },
      constipation: {
        type: Sequelize.BOOLEAN
      },
      selleLiquide: {
        type: Sequelize.BOOLEAN
      },
      spasmeIntestinaux: {
        type: Sequelize.BOOLEAN
      },
      douleurVesiculaire: {
        type: Sequelize.BOOLEAN
      },
      imperiositeFecale: {
        type: Sequelize.BOOLEAN
      },
      amaigrissement: {
        type: Sequelize.BOOLEAN
      },
      prisePoids: {
        type: Sequelize.BOOLEAN
      },
      saignementDigestifHaut: {
        type: Sequelize.BOOLEAN
      },
      saignementDigestifBas: {
        type: Sequelize.BOOLEAN
      },
      criseHemorroide: {
        type: Sequelize.BOOLEAN
      },
      commentaire: {
        type: Sequelize.STRING
      },
      dateDuJour: {
          type: Sequelize.DATE,
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
    return queryInterface.dropTable('ManifestionDigestive');
  }
};
