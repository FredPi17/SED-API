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
        const {
            anxiete, criseAngoisse, stress, epuisementPsychique, burnOut, tensionInterne, etatDepressif, perteElanVital, tristesseInhabituelle,
            irritabilite, hypersensibilite, baisseMoral, sauteHumeur, envieDeRien, commentaire
        } = req.body;
        return ManifestationPsychologique
            .findByPk(req.params.id)
            .then((psycho) => {
                psycho.update({
                    anxiete: anxiete || psycho.anxiete,
                    criseAngoisse: criseAngoisse || psycho.criseAngoisse,
                    stress: stress || psycho.stress,
                    epuisementPsychique: epuisementPsychique || psycho.epuisementPsychique,
                    burnOut: burnOut || psycho.burnOut,
                    tensionInterne: tensionInterne || psycho.tensionInterne,
                    etatDepressif: etatDepressif || psycho.etatDepressif,
                    perteElanVital: perteElanVital || psycho.perteElanVital,
                    tristesseInhabituelle: tristesseInhabituelle || psycho.tristesseInhabituelle,
                    irritabilite: irritabilite || psycho.irritabilite,
                    hypersensibilite: hypersensibilite || psycho.hypersensibilite,
                    baisseMoral: baisseMoral || psycho.baisseMoral,
                    sauteHumeur: sauteHumeur || psycho.sauteHumeur,
                    envieDeRien: envieDeRien || psycho.envieDeRien,
                    commentaire: commentaire || psycho.commentaire
                })
                    .then((updatedpsycho) => {
                        res.status(200).send({
                            message: 'psycho updated',
                            data: {
                                anxiete: anxiete || updatedpsycho.anxiete,
                                criseAngoisse: criseAngoisse || updatedpsycho.criseAngoisse,
                                stress: stress || updatedpsycho.stress,
                                epuisementPsychique: epuisementPsychique || updatedpsycho.epuisementPsychique,
                                burnOut: burnOut || updatedpsycho.burnOut,
                                tensionInterne: tensionInterne || updatedpsycho.tensionInterne,
                                etatDepressif: etatDepressif || updatedpsycho.etatDepressif,
                                perteElanVital: perteElanVital || updatedpsycho.perteElanVital,
                                tristesseInhabituelle: tristesseInhabituelle || updatedpsycho.tristesseInhabituelle,
                                irritabilite: irritabilite || updatedpsycho.irritabilite,
                                hypersensibilite: hypersensibilite || updatedpsycho.hypersensibilite,
                                baisseMoral: baisseMoral || updatedpsycho.baisseMoral,
                                sauteHumeur: sauteHumeur || updatedpsycho.sauteHumeur,
                                envieDeRien: envieDeRien || updatedpsycho.envieDeRien,
                                commentaire: commentaire || updatedpsycho.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionPsychologique(req, res) {
        return ManifestationPsychologique
            .findByPk(req.params.id)
            .then(psycho => {
                if (!psycho) {
                    return res.status(400).send({
                        message: 'Psycho Not Found',
                    });
                }
                return psycho
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Psycho successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifPsychologique;
