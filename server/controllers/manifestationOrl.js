import model from '../models';

const {ManifestationOrl} = model;

class ManifOrl {

    static addManifestionOrl(req, res) {
        const {
            nezBouche, ecoulementNasalTranslucide, ecoulementNasalePurulent, saignementNez, secheresseNasale, troubleOdorat, plaieNasale, rhyniteAllergique,
            rhyniteNonAllergique, pesanteurFaciale, douleurOsFace, sinusiteChronique, commentaire
        } = req.body;
        return ManifestationOrl
            .create({
                nezBouche,
                ecoulementNasalTranslucide,
                ecoulementNasalePurulent,
                saignementNez,
                secheresseNasale,
                troubleOdorat,
                plaieNasale,
                rhyniteAllergique,
                rhyniteNonAllergique,
                pesanteurFaciale,
                douleurOsFace,
                sinusiteChronique,
                commentaire
            })
            .then(addManifestionOrl => res.status(201).send({
                success: true,
                message: 'Manifestation respi successfully created',
                addManifestionOrl
            }))
    }

    static getManifestionOrl(req, res) {
        return ManifestationOrl
            .findAll()
            .then(listeManifestionOrl => res.status(200).send(listeManifestionOrl));
    }

    static updateManifestionOrl(req, res) {

    }

    static deleteManifestionOrl(req, res) {

    }
}

export default ManifOrl;
