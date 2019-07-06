import model from '../models';

const {Repercussions} = model;

class Repercu {

    static addRepercussion(req, res) {
        const {
            sommeil, agmentationAppetit, perteAppetit, marche, diffSupporterPosAssiseProl, diffSupporterPosDebProl, deplacementVoiture, limitDeplacementDomicile,
            limitDeplacementExterieur, escaliers, habillement, soinsHygieneCorp, seLever, tachesQuot, entretienDomicile, activitePro, loisirs, activiteManuelle,
            suivreEmissionRadioTV, parler, suivreConversation, vieSociale, vieFamiliale, intimite, desirSexuel, moral, anxiete, irritabilite, maitriseSoi, renfermement,
            souffranceMoral, confusion, angoisse, concentration, idUtilisateur
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
                concentration,
                idUtilisateur
            })
            .then(addRepercussion => res.status(201).send({
                success: true,
                message: 'Repercussions successfully created',
                addRepercussion
            }))
    }

    static getRepercussion(req, res) {
        return Repercussions
            .findAll()
            .then(listeRepercussion => res.status(200).send(listeRepercussion));
    }

    static getOneRepercussionByIdUtilisateur(req, res) {
        return Repercussions
            .findOne({where: {idUtilisateur: req.params.id}})
            .then(listeRepercussion => res.status(200).send(listeRepercussion));
    }

    static getAllRepercussionByIdUtilisateur(req, res) {
        return Repercussions
            .findAll({where: {idUtilisateur: req.params.id}})
            .then(listeRepercussion => res.status(200).send(listeRepercussion));
    }

    static updateRepercussion(req, res) {
        const {
            sommeil, agmentationAppetit, perteAppetit, marche, diffSupporterPosAssiseProl, diffSupporterPosDebProl, deplacementVoiture, limitDeplacementDomicile,
            limitDeplacementExterieur, escaliers, habillement, soinsHygieneCorp, seLever, tachesQuot, entretienDomicile, activitePro, loisirs, activiteManuelle,
            suivreEmissionRadioTV, parler, suivreConversation, vieSociale, vieFamiliale, intimite, desirSexuel, moral, anxiete, irritabilite, maitriseSoi, renfermement,
            souffranceMoral, confusion, angoisse, concentration
        } = req.body;
        return Repercussions
            .findByPk(req.params.id)
            .then((repercussion) => {
                repercussion.update({
                    sommeil: sommeil || repercussion.sommeil,
                    agmentationAppetit: agmentationAppetit || repercussion.agmentationAppetit,
                    perteAppetit: perteAppetit || repercussion.perteAppetit,
                    marche: marche || repercussion.marche,
                    diffSupporterPosAssiseProl: diffSupporterPosAssiseProl || repercussion.diffSupporterPosAssiseProl,
                    diffSupporterPosDebProl: diffSupporterPosDebProl || repercussion.diffSupporterPosDebProl,
                    deplacementVoiture: deplacementVoiture || repercussion.deplacementVoiture,
                    limitDeplacementDomicile: limitDeplacementDomicile || repercussion.limitDeplacementDomicile,
                    limitDeplacementExterieur: limitDeplacementExterieur || repercussion.limitDeplacementExterieur,
                    escaliers: escaliers || repercussion.escaliers,
                    habillement: habillement || repercussion.habillement,
                    soinsHygieneCorp: soinsHygieneCorp || repercussion.soinsHygieneCorp,
                    seLever: seLever || repercussion.seLever,
                    tachesQuot: tachesQuot || repercussion.tachesQuot,
                    entretienDomicile: entretienDomicile || repercussion.entretienDomicile,
                    activitePro: activitePro || repercussion.activitePro,
                    loisirs: loisirs || repercussion.loisirs,
                    activiteManuelle: activiteManuelle || repercussion.activiteManuelle,
                    suivreEmissionRadioTV: suivreEmissionRadioTV || repercussion.suivreEmissionRadioTV,
                    parler: parler || repercussion.parler,
                    suivreConversation: suivreConversation || repercussion.suivreConversation,
                    vieSociale: vieSociale || repercussion.vieSociale,
                    vieFamiliale: vieFamiliale || repercussion.vieFamiliale,
                    intimite: intimite || repercussion.intimite,
                    desirSexuel: desirSexuel || repercussion.desirSexuel,
                    moral: moral || repercussion.moral,
                    anxiete: anxiete || repercussion.anxiete,
                    irritabilite: irritabilite || repercussion.irritabilite,
                    maitriseSoi: maitriseSoi || repercussion.maitriseSoi,
                    renfermement: renfermement || repercussion.renfermement,
                    souffranceMoral: souffranceMoral || repercussion.souffranceMoral,
                    confusion: confusion || repercussion.confusion,
                    angoisse: angoisse || repercussion.angoisse,
                    concentration: concentration || repercussion.concentration
                })
                    .then((updatedrepercussion) => {
                        res.status(200).send({
                            message: 'Repercussion updated',
                            data: {
                                sommeil: sommeil || repercussion.sommeil,
                                agmentationAppetit: agmentationAppetit || repercussion.agmentationAppetit,
                                perteAppetit: perteAppetit || repercussion.perteAppetit,
                                marche: marche || repercussion.marche,
                                diffSupporterPosAssiseProl: diffSupporterPosAssiseProl || repercussion.diffSupporterPosAssiseProl,
                                diffSupporterPosDebProl: diffSupporterPosDebProl || repercussion.diffSupporterPosDebProl,
                                deplacementVoiture: deplacementVoiture || repercussion.deplacementVoiture,
                                limitDeplacementDomicile: limitDeplacementDomicile || repercussion.limitDeplacementDomicile,
                                limitDeplacementExterieur: limitDeplacementExterieur || repercussion.limitDeplacementExterieur,
                                escaliers: escaliers || repercussion.escaliers,
                                habillement: habillement || repercussion.habillement,
                                soinsHygieneCorp: soinsHygieneCorp || repercussion.soinsHygieneCorp,
                                seLever: seLever || repercussion.seLever,
                                tachesQuot: tachesQuot || repercussion.tachesQuot,
                                entretienDomicile: entretienDomicile || repercussion.entretienDomicile,
                                activitePro: activitePro || repercussion.activitePro,
                                loisirs: loisirs || repercussion.loisirs,
                                activiteManuelle: activiteManuelle || repercussion.activiteManuelle,
                                suivreEmissionRadioTV: suivreEmissionRadioTV || repercussion.suivreEmissionRadioTV,
                                parler: parler || repercussion.parler,
                                suivreConversation: suivreConversation || repercussion.suivreConversation,
                                vieSociale: vieSociale || repercussion.vieSociale,
                                vieFamiliale: vieFamiliale || repercussion.vieFamiliale,
                                intimite: intimite || repercussion.intimite,
                                desirSexuel: desirSexuel || repercussion.desirSexuel,
                                moral: moral || repercussion.moral,
                                anxiete: anxiete || repercussion.anxiete,
                                irritabilite: irritabilite || repercussion.irritabilite,
                                maitriseSoi: maitriseSoi || repercussion.maitriseSoi,
                                renfermement: renfermement || repercussion.renfermement,
                                souffranceMoral: souffranceMoral || repercussion.souffranceMoral,
                                confusion: confusion || repercussion.confusion,
                                angoisse: angoisse || repercussion.angoisse,
                                concentration: concentration || repercussion.concentration
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteRepercussion(req, res) {
        return Repercussions
            .findByPk(req.params.id)
            .then(repercu => {
                if (!repercu) {
                    return res.status(400).send({
                        message: 'Repercussion Not Found',
                    });
                }
                return repercu
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Repercussion successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default Repercu;
