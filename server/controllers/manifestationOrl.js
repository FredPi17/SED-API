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
        const {
            nezBouche, ecoulementNasalTranslucide, ecoulementNasalePurulent, saignementNez, secheresseNasale, troubleOdorat, plaieNasale, rhyniteAllergique,
            rhyniteNonAllergique, pesanteurFaciale, douleurOsFace, sinusiteChronique, commentaire
        } = req.body;
        return ManifestationOrl
            .findByPk(req.params.id)
            .then((orl) => {
                orl.update({
                    nezBouche: nezBouche || orl.nezBouche,
                    ecoulementNasalTranslucide: ecoulementNasalTranslucide || orl.ecoulementNasalTranslucide,
                    ecoulementNasalePurulent: ecoulementNasalePurulent || orl.ecoulementNasalePurulent,
                    saignementNez: saignementNez || orl.saignementNez,
                    secheresseNasale: secheresseNasale || orl.secheresseNasale,
                    troubleOdorat: troubleOdorat || orl.troubleOdorat,
                    plaieNasale: plaieNasale || orl.plaieNasale,
                    rhyniteAllergique: rhyniteAllergique || orl.rhyniteAllergique,
                    rhyniteNonAllergique: rhyniteNonAllergique || orl.rhyniteNonAllergique,
                    pesanteurFaciale: pesanteurFaciale || orl.pesanteurFaciale,
                    douleurOsFace: douleurOsFace || orl.douleurOsFace,
                    sinusiteChronique: sinusiteChronique || orl.sinusiteChronique,
                    commentaire: commentaire || orl.commentaire
                })
                    .then((updatedorl) => {
                        res.status(200).send({
                            message: 'orl updated',
                            data: {
                                nezBouche: nezBouche || updatedorl.nezBouche,
                                ecoulementNasalTranslucide: ecoulementNasalTranslucide || updatedorl.ecoulementNasalTranslucide,
                                ecoulementNasalePurulent: ecoulementNasalePurulent || updatedorl.ecoulementNasalePurulent,
                                saignementNez: saignementNez || updatedorl.saignementNez,
                                secheresseNasale: secheresseNasale || updatedorl.secheresseNasale,
                                troubleOdorat: troubleOdorat || updatedorl.troubleOdorat,
                                plaieNasale: plaieNasale || updatedorl.plaieNasale,
                                rhyniteAllergique: rhyniteAllergique || updatedorl.rhyniteAllergique,
                                rhyniteNonAllergique: rhyniteNonAllergique || updatedorl.rhyniteNonAllergique,
                                pesanteurFaciale: pesanteurFaciale || updatedorl.pesanteurFaciale,
                                douleurOsFace: douleurOsFace || updatedorl.douleurOsFace,
                                sinusiteChronique: sinusiteChronique || updatedorl.sinusiteChronique,
                                commentaire: commentaire || updatedorl.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionOrl(req, res) {
        return ManifestationOrl
            .findByPk(req.params.id)
            .then(orl => {
                if (!orl) {
                    return res.status(400).send({
                        message: 'ORL Not Found',
                    });
                }
                return orl
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'ORL successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifOrl;
