import model from '../models';

const {ManifestionCardioVasculaire} = model;

class ManifCardio {

    static addManifestionCardio(req, res) {
        const {
            tachycardie, tachycardieNb, bradycardie, bradycardieNb, hypertension, hypertensionNb, hypotension, hypotensionNb, tachycardiePosturale,
            tachycardiePosturaleNb, palpitation, arythmie, marbrures, extremiteFroideEtPale, malaise, varice, syncope, doigtEnfle, phlebite,
            gonflementJambeChevillePieds, syndromeReynaud, essouflement, douleurThoracique, evanouissement, systole, diastole, pouls, commentaire, idUtilisateur
        } = req.body;
        return ManifestionCardioVasculaire
            .create({
                tachycardie,
                tachycardieNb,
                bradycardie,
                bradycardieNb,
                hypertension,
                hypertensionNb,
                hypotension,
                hypotensionNb,
                tachycardiePosturale,
                tachycardiePosturaleNb,
                palpitation,
                arythmie,
                marbrures,
                extremiteFroideEtPale,
                malaise,
                varice,
                syncope,
                doigtEnfle,
                phlebite,
                gonflementJambeChevillePieds,
                syndromeReynaud,
                essouflement,
                douleurThoracique,
                evanouissement,
                systole,
                diastole,
                pouls,
                commentaire,
                idUtilisateur
            })
            .then(addManifestionCardio => res.status(201).send({
                success: true,
                message: 'Gorge symptome successfully created',
                addManifestionCardio
            }))
    }

    static getManifestionCardio(req, res) {
        return ManifestionCardioVasculaire
            .findAll()
            .then(listeManifestionCardio => res.status(200).send(listeManifestionCardio));
    }

    static getOneManifestionCardioByIdUtilisateur(req, res) {
        return ManifestionCardioVasculaire
            .findOne({where: {idUtilisateur: req.params.id}})
            .then(listeManifestionCardio => res.status(200).send(listeManifestionCardio));
    }

    static getAllManifestionCardioByIdUtilisateur(req, res) {
        return ManifestionCardioVasculaire
            .findAll({where: {idUtilisateur: req.params.id}})
            .then(listeManifestionCardio => res.status(200).send(listeManifestionCardio));
    }

    static updateManifestionCardio(req, res) {
        const {
            tachycardie, tachycardieNb, bradycardie, bradycardieNb, hypertension, hypertensionNb, hypotension, hypotensionNb, tachycardiePosturale,
            tachycardiePosturaleNb, palpitation, arythmie, marbrures, extremiteFroideEtPale, malaise, varice, syncope, doigtEnfle, phlebite,
            gonflementJambeChevillePieds, syndromeReynaud, essouflement, douleurThoracique, evanouissement, systole, diastole, pouls, commentaire
        } = req.body;
        return ManifestionCardioVasculaire
            .findByPk(req.params.id)
            .then((cardio) => {
                cardio.update({
                    tachycardie: tachycardie || cardio.tachycardie,
                    tachycardieNb: tachycardieNb || cardio.tachycardieNb,
                    bradycardie: bradycardie || cardio.bradycardie,
                    bradycardieNb: bradycardieNb || cardio.bradycardieNb,
                    hypertension: hypertension || cardio.hypertension,
                    hypertensionNb: hypertensionNb || cardio.hypertensionNb,
                    hypotension: hypotension || cardio.hypotension,
                    hypotensionNb: hypotensionNb || cardio.hypotensionNb,
                    tachycardiePosturale: tachycardiePosturale || cardio.tachycardiePosturale,
                    tachycardiePosturaleNb: tachycardiePosturaleNb || cardio.tachycardiePosturaleNb,
                    palpitation: palpitation || cardio.palpitation,
                    arythmie: arythmie || cardio.arythmie,
                    marbrures: marbrures || cardio.marbrures,
                    extremiteFroideEtPale: extremiteFroideEtPale || cardio.extremiteFroideEtPale,
                    malaise: malaise || cardio.malaise,
                    varice: varice || cardio.varice,
                    syncope: syncope || cardio.syncope,
                    doigtEnfle: doigtEnfle || cardio.doigtEnfle,
                    phlebite: phlebite || cardio.phlebite,
                    gonflementJambeChevillePieds: gonflementJambeChevillePieds || cardio.gonflementJambeChevillePieds,
                    syndromeReynaud: syndromeReynaud || cardio.syndromeReynaud,
                    essouflement: essouflement || cardio.essouflement,
                    douleurThoracique: douleurThoracique || cardio.douleurThoracique,
                    evanouissement: evanouissement || cardio.evanouissement,
                    systole: systole || cardio.systole,
                    diastole: diastole || cardio.diastole,
                    pouls: pouls || cardio.pouls,
                    commentaire: commentaire || cardio.commentaire
                })
                    .then((updatedcardio) => {
                        res.status(200).send({
                            message: 'Gorge updated',
                            data: {
                                tachycardie: tachycardie || updatedcardio.tachycardie,
                                tachycardieNb: tachycardieNb || updatedcardio.tachycardieNb,
                                bradycardie: bradycardie || updatedcardio.bradycardie,
                                bradycardieNb: bradycardieNb || updatedcardio.bradycardieNb,
                                hypertension: hypertension || updatedcardio.hypertension,
                                hypertensionNb: hypertensionNb || updatedcardio.hypertensionNb,
                                hypotension: hypotension || updatedcardio.hypotension,
                                hypotensionNb: hypotensionNb || updatedcardio.hypotensionNb,
                                tachycardiePosturale: tachycardiePosturale || updatedcardio.tachycardiePosturale,
                                tachycardiePosturaleNb: tachycardiePosturaleNb || updatedcardio.tachycardiePosturaleNb,
                                palpitation: palpitation || updatedcardio.palpitation,
                                arythmie: arythmie || updatedcardio.arythmie,
                                marbrures: marbrures || updatedcardio.marbrures,
                                extremiteFroideEtPale: extremiteFroideEtPale || updatedcardio.extremiteFroideEtPale,
                                malaise: malaise || updatedcardio.malaise,
                                varice: varice || updatedcardio.varice,
                                syncope: syncope || updatedcardio.syncope,
                                doigtEnfle: doigtEnfle || updatedcardio.doigtEnfle,
                                phlebite: phlebite || updatedcardio.phlebite,
                                gonflementJambeChevillePieds: gonflementJambeChevillePieds || updatedcardio.gonflementJambeChevillePieds,
                                syndromeReynaud: syndromeReynaud || updatedcardio.syndromeReynaud,
                                essouflement: essouflement || updatedcardio.essouflement,
                                douleurThoracique: douleurThoracique || updatedcardio.douleurThoracique,
                                evanouissement: evanouissement || updatedcardio.evanouissement,
                                systole: systole || updatedcardio.systole,
                                diastole: diastole || updatedcardio.diastole,
                                pouls: pouls || updatedcardio.pouls,
                                commentaire: commentaire || updatedcardio.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionCardio(req, res) {
        return ManifestionCardioVasculaire
            .findByPk(req.params.id)
            .then(cardio => {
                if (!cardio) {
                    return res.status(400).send({
                        message: 'Cardio Not Found',
                    });
                }
                return cardio
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Cardio successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifCardio;
