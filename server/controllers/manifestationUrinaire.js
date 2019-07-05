import model from '../models';

const {ManifestationUrinaire} = model;

class ManifUrinaire {

    static addManifestionUrinaire(req, res) {
        const {
            brulureMictionnelle, douleurFosseLombaire, infectionUrinaireSuspectee, infectionUrinaireAveree, pyelonephrite, coliqueNephretique, BULeucocyte, BUNitrite,
            BUSang, BUProteine, BUGlucose, BUBilirubine, BUUrobilinogene, BUCetone, BUDensite, BUPH, BUAcideAscorbique, douleurVessie, hematurieMacro, hematurieMicro,
            urineTrouble, urineMalodorante, nycturie, fuiteUrinaire, incontinenceEffort, imperiosite, gouttesRetardataire, diminutionBesoinUriner, retentionUrinaire,
            difficulteUriner, impossibiliteUriner, sensationVidangeComplete, mictionDeuxTemps, mictionPoussee, commentaire
        } = req.body;
        return ManifestationUrinaire
            .create({
                brulureMictionnelle,
                douleurFosseLombaire,
                infectionUrinaireSuspectee,
                infectionUrinaireAveree,
                pyelonephrite,
                coliqueNephretique,
                BULeucocyte,
                BUNitrite,
                BUSang,
                BUProteine,
                BUGlucose,
                BUBilirubine,
                BUUrobilinogene,
                BUCetone,
                BUDensite,
                BUPH,
                BUAcideAscorbique,
                douleurVessie,
                hematurieMacro,
                hematurieMicro,
                urineTrouble,
                urineMalodorante,
                nycturie,
                fuiteUrinaire,
                incontinenceEffort,
                imperiosite,
                gouttesRetardataire,
                diminutionBesoinUriner,
                retentionUrinaire,
                difficulteUriner,
                impossibiliteUriner,
                sensationVidangeComplete,
                mictionDeuxTemps,
                mictionPoussee,
                commentaire
            })
            .then(addManifestionUrinaire => res.status(201).send({
                success: true,
                message: 'Manifestation urinaire successfully created',
                addManifestionUrinaire
            }))
    }

    static getManifestionUrinaire(req, res) {
        return ManifestationUrinaire
            .findAll()
            .then(listeManifestionUrinaire => res.status(200).send(listeManifestionUrinaire));
    }

    static updateManifestionUrinaire(req, res) {
        const {
            brulureMictionnelle, douleurFosseLombaire, infectionUrinaireSuspectee, infectionUrinaireAveree, pyelonephrite, coliqueNephretique, BULeucocyte, BUNitrite,
            BUSang, BUProteine, BUGlucose, BUBilirubine, BUUrobilinogene, BUCetone, BUDensite, BUPH, BUAcideAscorbique, douleurVessie, hematurieMacro, hematurieMicro,
            urineTrouble, urineMalodorante, nycturie, fuiteUrinaire, incontinenceEffort, imperiosite, gouttesRetardataire, diminutionBesoinUriner, retentionUrinaire,
            difficulteUriner, impossibiliteUriner, sensationVidangeComplete, mictionDeuxTemps, mictionPoussee, commentaire
        } = req.body;
        return ManifestationUrinaire
            .findByPk(req.params.id)
            .then((urinaire) => {
                urinaire.update({
                    brulureMictionnelle: brulureMictionnelle || urinaire.brulureMictionnelle,
                    douleurFosseLombaire: douleurFosseLombaire || urinaire.douleurFosseLombaire,
                    infectionUrinaireSuspectee: infectionUrinaireSuspectee || urinaire.infectionUrinaireSuspectee,
                    infectionUrinaireAveree: infectionUrinaireAveree || urinaire.infectionUrinaireAveree,
                    pyelonephrite: pyelonephrite || urinaire.pyelonephrite,
                    coliqueNephretique: coliqueNephretique || urinaire.coliqueNephretique,
                    BULeucocyte: BULeucocyte || urinaire.BULeucocyte,
                    BUNitrite: BUNitrite || urinaire.BUNitrite,
                    BUSang: BUSang || urinaire.BUSang,
                    BUProteine: BUProteine || urinaire.BUProteine,
                    BUGlucose: BUGlucose || urinaire.BUGlucose,
                    BUBilirubine: BUBilirubine || urinaire.BUBilirubine,
                    BUUrobilinogene: BUUrobilinogene || urinaire.BUUrobilinogene,
                    BUCetone: BUCetone || urinaire.BUCetone,
                    BUDensite: BUDensite || urinaire.BUDensite,
                    BUPH: BUPH || urinaire.BUPH,
                    BUAcideAscorbique: BUAcideAscorbique || urinaire.BUAcideAscorbique,
                    douleurVessie: douleurVessie || urinaire.douleurVessie,
                    hematurieMacro: hematurieMacro || urinaire.hematurieMacro,
                    hematurieMicro: hematurieMicro || urinaire.hematurieMicro,
                    urineTrouble: urineTrouble || urinaire.urineTrouble,
                    urineMalodorante: urineMalodorante || urinaire.urineMalodorante,
                    nycturie: nycturie || urinaire.nycturie,
                    fuiteUrinaire: fuiteUrinaire || urinaire.fuiteUrinaire,
                    incontinenceEffort: incontinenceEffort || urinaire.incontinenceEffort,
                    imperiosite: imperiosite || urinaire.imperiosite,
                    gouttesRetardataire: gouttesRetardataire || urinaire.gouttesRetardataire,
                    diminutionBesoinUriner: diminutionBesoinUriner || urinaire.diminutionBesoinUriner,
                    retentionUrinaire: retentionUrinaire || urinaire.retentionUrinaire,
                    difficulteUriner: difficulteUriner || urinaire.difficulteUriner,
                    impossibiliteUriner: impossibiliteUriner || urinaire.impossibiliteUriner,
                    sensationVidangeComplete: sensationVidangeComplete || urinaire.sensationVidangeComplete,
                    mictionDeuxTemps: mictionDeuxTemps || urinaire.mictionDeuxTemps,
                    mictionPoussee: mictionPoussee || urinaire.mictionPoussee,
                    commentaire: commentaire || urinaire.commentaire
                })
                    .then((updatedurinaire) => {
                        res.status(200).send({
                            message: 'urinaire updated',
                            data: {
                                brulureMictionnelle: brulureMictionnelle || updatedurinaire.brulureMictionnelle,
                                douleurFosseLombaire: douleurFosseLombaire || updatedurinaire.douleurFosseLombaire,
                                infectionUrinaireSuspectee: infectionUrinaireSuspectee || updatedurinaire.infectionUrinaireSuspectee,
                                infectionUrinaireAveree: infectionUrinaireAveree || updatedurinaire.infectionUrinaireAveree,
                                pyelonephrite: pyelonephrite || updatedurinaire.pyelonephrite,
                                coliqueNephretique: coliqueNephretique || updatedurinaire.coliqueNephretique,
                                BULeucocyte: BULeucocyte || updatedurinaire.BULeucocyte,
                                BUNitrite: BUNitrite || updatedurinaire.BUNitrite,
                                BUSang: BUSang || updatedurinaire.BUSang,
                                BUProteine: BUProteine || updatedurinaire.BUProteine,
                                BUGlucose: BUGlucose || updatedurinaire.BUGlucose,
                                BUBilirubine: BUBilirubine || updatedurinaire.BUBilirubine,
                                BUUrobilinogene: BUUrobilinogene || updatedurinaire.BUUrobilinogene,
                                BUCetone: BUCetone || updatedurinaire.BUCetone,
                                BUDensite: BUDensite || updatedurinaire.BUDensite,
                                BUPH: BUPH || updatedurinaire.BUPH,
                                BUAcideAscorbique: BUAcideAscorbique || updatedurinaire.BUAcideAscorbique,
                                douleurVessie: douleurVessie || updatedurinaire.douleurVessie,
                                hematurieMacro: hematurieMacro || updatedurinaire.hematurieMacro,
                                hematurieMicro: hematurieMicro || updatedurinaire.hematurieMicro,
                                urineTrouble: urineTrouble || updatedurinaire.urineTrouble,
                                urineMalodorante: urineMalodorante || updatedurinaire.urineMalodorante,
                                nycturie: nycturie || updatedurinaire.nycturie,
                                fuiteUrinaire: fuiteUrinaire || updatedurinaire.fuiteUrinaire,
                                incontinenceEffort: incontinenceEffort || updatedurinaire.incontinenceEffort,
                                imperiosite: imperiosite || updatedurinaire.imperiosite,
                                gouttesRetardataire: gouttesRetardataire || updatedurinaire.gouttesRetardataire,
                                diminutionBesoinUriner: diminutionBesoinUriner || updatedurinaire.diminutionBesoinUriner,
                                retentionUrinaire: retentionUrinaire || updatedurinaire.retentionUrinaire,
                                difficulteUriner: difficulteUriner || updatedurinaire.difficulteUriner,
                                impossibiliteUriner: impossibiliteUriner || updatedurinaire.impossibiliteUriner,
                                sensationVidangeComplete: sensationVidangeComplete || updatedurinaire.sensationVidangeComplete,
                                mictionDeuxTemps: mictionDeuxTemps || updatedurinaire.mictionDeuxTemps,
                                mictionPoussee: mictionPoussee || updatedurinaire.mictionPoussee,
                                commentaire: commentaire || updatedurinaire.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionUrinaire(req, res) {
        return ManifestationUrinaire
            .findByPk(req.params.id)
            .then(urinaire => {
                if (!urinaire) {
                    return res.status(400).send({
                        message: 'Urinaire Not Found',
                    });
                }
                return urinaire
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Urinaire successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifUrinaire;
