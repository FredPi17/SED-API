import model from '../models';

const {Repercussions} = model;

class Repercu {

    static addRepercussion(req, res) {
        const {
            sommeil, agmentationAppetit, perteAppetit, marche, diffSupporterPosAssiseProl, diffSupporterPosDebProl, deplacementVoiture, limitDeplacementDomicile,
            limitDeplacementExterieur, escaliers, habillement, soinsHygieneCorp, seLever, tachesQuot, entretienDomicile, activitePro, loisirs, activiteManuelle,
            suivreEmissionRadioTV, parler, suivreConversation, vieSociale, vieFamiliale, intimite, desirSexuel, moral, anxiete, irritabilite, maitriseSoi, renfermement,
            souffranceMoral, confusion, angoisse, concentration
        } = req.body;
        return Repercussions
            .create({
                sommeil,
                agmentationAppetit,
                perteAppetit,
                marche,
                diffSupporterPosAssiseProl,
                diffSupporterPosDebProl,
                deplacementVoiture,
                limitDeplacementDomicile,
                limitDeplacementExterieur,
                escaliers,
                habillement,
                soinsHygieneCorp,
                seLever,
                tachesQuot,
                entretienDomicile,
                activitePro,
                loisirs,
                activiteManuelle,
                suivreEmissionRadioTV,
                parler,
                suivreConversation,
                vieSociale,
                vieFamiliale,
                intimite,
                desirSexuel,
                moral,
                anxiete,
                irritabilite,
                maitriseSoi,
                renfermement,
                souffranceMoral,
                confusion,
                angoisse,
                concentration
            })
            .then(addRepercussion => res.status(201).send({
                success: true,
                message: 'Repercussions urinaire successfully created',
                addRepercussion
            }))
    }

    static getRepercussion(req, res) {
        return Repercussions
            .findAll()
            .then(listeRepercussion => res.status(200).send(listeRepercussion));
    }

    static updateRepercussion(req, res) {

    }

    static deleteRepercussion(req, res) {

    }
}

export default Repercu;
