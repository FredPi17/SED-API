import model from '../models';

const {ManifestationCognitive} = model;

class ManifCognitive {

    static addManifestionCognitive(req, res) {
        const {
            alterationMemoireTravail, difficulteCoordinationMouvement, troubleMemoire, ralentissementPensee, oublis, perteMot, difficulteConcentration,
            brouillardMental, troubleOrientation, troubleVisuoSpacial, commentaire, idUtilisateur
        } = req.body;
        return ManifestationCognitive
            .create({
                alterationMemoireTravail,
                difficulteCoordinationMouvement,
                troubleMemoire,
                ralentissementPensee,
                oublis,
                perteMot,
                difficulteConcentration,
                brouillardMental,
                troubleOrientation,
                troubleVisuoSpacial,
                commentaire,
                idUtilisateur
            })
            .then(addManifestionCognitive => res.status(201).send({
                success: true,
                message: 'Cognitive symptome successfully created',
                addManifestionCognitive
            }))
    }

    static getManifestionCognitive(req, res) {
        return ManifestationCognitive
            .findAll()
            .then(listeManifestionCognitive => res.status(200).send(listeManifestionCognitive));
    }

    static getOneManifestionCognitiveByIdUtilisateur(req, res) {
        return ManifestationCognitive
            .findOne({where: {idUtilisateur: req.params.id}})
            .then(listeManifestionCognitive => res.status(200).send(listeManifestionCognitive));
    }

    static getAllManifestionCognitiveByIdUtilisateur(req, res) {
        return ManifestationCognitive
            .findAll({where: {idUtilisateur: req.params.id}})
            .then(listeManifestionCognitive => res.status(200).send(listeManifestionCognitive));
    }

    static updateManifestionCognitive(req, res) {
        const {
            alterationMemoireTravail, difficulteCoordinationMouvement, troubleMemoire, ralentissementPensee, oublis, perteMot, difficulteConcentration,
            brouillardMental, troubleOrientation, troubleVisuoSpacial, commentaire
        } = req.body;
        return ManifestationCognitive
            .findByPk(req.params.id)
            .then((cogn) => {
                cogn.update({
                    alterationMemoireTravail: alterationMemoireTravail || cogn.alterationMemoireTravail,
                    difficulteCoordinationMouvement: difficulteCoordinationMouvement || cogn.difficulteCoordinationMouvement,
                    troubleMemoire: troubleMemoire || cogn.troubleMemoire,
                    ralentissementPensee: ralentissementPensee || cogn.ralentissementPensee,
                    oublis: oublis || cogn.oublis,
                    perteMot: perteMot || cogn.perteMot,
                    difficulteConcentration: difficulteConcentration || cogn.difficulteConcentration,
                    brouillardMental: brouillardMental || cogn.brouillardMental,
                    troubleOrientation: troubleOrientation || cogn.troubleOrientation,
                    troubleVisuoSpacial: troubleVisuoSpacial || cogn.troubleVisuoSpacial,
                    commentaire: commentaire || cogn.commentaire
                })
                    .then((updatedcogn) => {
                        res.status(200).send({
                            message: 'Cognitive updated',
                            data: {
                                alterationMemoireTravail: alterationMemoireTravail || updatedcogn.alterationMemoireTravail,
                                difficulteCoordinationMouvement: difficulteCoordinationMouvement || updatedcogn.difficulteCoordinationMouvement,
                                troubleMemoire: troubleMemoire || updatedcogn.troubleMemoire,
                                ralentissementPensee: ralentissementPensee || updatedcogn.ralentissementPensee,
                                oublis: oublis || updatedcogn.oublis,
                                perteMot: perteMot || cogn.perteMot,
                                difficulteConcentration: difficulteConcentration || updatedcogn.difficulteConcentration,
                                brouillardMental: brouillardMental || updatedcogn.brouillardMental,
                                troubleOrientation: troubleOrientation || updatedcogn.troubleOrientation,
                                troubleVisuoSpacial: troubleVisuoSpacial || updatedcogn.troubleVisuoSpacial,
                                commentaire: commentaire || updatedcogn.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionCognitive(req, res) {
        return ManifestationCognitive
            .findByPk(req.params.id)
            .then(cogn => {
                if (!cogn) {
                    return res.status(400).send({
                        message: 'Cognitive Not Found',
                    });
                }
                return cogn
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Cognitive successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifCognitive;
