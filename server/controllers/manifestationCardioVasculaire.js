import model from '../models';

const {ManifestationCardioVasculaire} = model;

class ManifCardio {

    static addManifestionCardio(req, res) {
        const {
            tachycardie, tachycardieNb, bradycardie, bradycardieNb, hypertension, hypertensionNb, hypotension, hypotensionNb, tachycardiePosturale,
            tachycardiePosturaleNb, palpitation, arythmie, marbrures, extremiteFroideEtPale, malaise, varice, syncope, doigtEnfle, phlebite,
            gonflementJambeChevillePieds, syndromeReynaud, essouflement, douleurThoracique, evanouissement, systole, diastole, pouls, commentaire
        } = req.body;
        return ManifestationCardioVasculaire
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
                commentaire
            })
            .then(addManifestionCardio => res.status(201).send({
                success: true,
                message: 'Gorge symptome successfully created',
                addManifestionCardio
            }))
    }

    static getManifestionCardio(req, res) {
        return ManifestationCardioVasculaire
            .findAll()
            .then(listeManifestionCardio => res.status(200).send(listeManifestionCardio));
    }

    static updateManifestionCardio(req, res) {

    }

    static deleteManifestionCardio(req, res) {

    }
}

export default ManifCardio;
