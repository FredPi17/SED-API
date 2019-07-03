'use strict';

export default (sequelize, DataTypes) => {
    const ManifestionDigestive = sequelize.define('ManifestionDigestive', {
        dysphagie: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        fausseRoute: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        rgo: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        regurgitation: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        sensationBrulureOesophage: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        mauvaiseHaleine: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        eructation: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        nausees: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        vomissements: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        pesanteurGastrique: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        indigestion: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        gastroParesie: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        brulureEstomac: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        ballonements: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        aerophagie: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        douleurAbdominale: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        douleurEpigastrique: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        crampeIntestinale: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        estomacGonfle: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        satietePrecoce: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        perteAppetit: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        soifPermanente: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        impossibiliteAlimenter: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        absenceSatiete: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        sensationFaimDouloureuse: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        hypoglycemieReactionnelle: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        gaz: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        constipation: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        selleLiquide: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        spasmeIntestinaux: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        douleurVesiculaire: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        imperiositeFecale: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        amaigrissement: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        prisePoids: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        saignementDigestifHaut: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        saignementDigestifBas: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        criseHemorroide: {
            type: DataTypes.BOOLEAN,
            allowNull: {
                args: true
            }
        },
        commentaire: {
            type: DataTypes.STRING,
            allowNull: {
                args: true
            }
        },
        dateDuJour: {
            type: DataTypes.DATE,
            allowNull: {
                args: true
            }
        }
    }, {});
    ManifestionDigestive.associate = (models) => {
        // associations can be defined here
    };
    return ManifestionDigestive;
};
