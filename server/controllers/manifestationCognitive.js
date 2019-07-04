import model from '../models';

const {ManifestationCognitive} = model;

class ManifCognitive {

    static addManifestionCognitive(req, res) {
        const {
            alterationMemoireTravail, difficulteCoordinationMouvement, troubleMemoire, ralentissementPensee, oublis, perteMot, difficulteConcentration,
            brouillardMental, troubleOrientation, troubleVisuoSpacial, commentaire
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
                commentaire
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

    static updateManifestionCognitive(req, res) {

    }

    static deleteManifestionCognitive(req, res) {

    }
}

export default ManifCognitive;
