import model from '../models';

const {ManifestationPsychologique} = model;

class ManifPsychologique {

    static addManifestionPsychologique(req, res) {
        const {
            anxiete, criseAngoisse, stress, epuisementPsychique, burnOut, tensionInterne, etatDepressif, perteElanVital, tristesseInhabituelle,
            irritabilite, hypersensibilite, baisseMoral, sauteHumeur, envieDeRien, commentaire
        } = req.body;
        return ManifestationPsychologique
            .create({
                anxiete,
                criseAngoisse,
                stress,
                epuisementPsychique,
                burnOut,
                tensionInterne,
                etatDepressif,
                perteElanVital,
                tristesseInhabituelle,
                irritabilite,
                hypersensibilite,
                baisseMoral,
                sauteHumeur,
                envieDeRien,
                commentaire
            })
            .then(addManifestionPsychologique => res.status(201).send({
                success: true,
                message: 'SommeilEtFatigue symptome successfully created',
                addManifestionPsychologique
            }))
    }

    static getManifestionPsychologique(req, res) {
        return ManifestationPsychologique
            .findAll()
            .then(listeManifestionPsychologique => res.status(200).send(listeManifestionPsychologique));
    }

    static updateManifestionPsychologique(req, res) {

    }

    static deleteManifestionPsychologique(req, res) {

    }
}

export default ManifPsychologique;
