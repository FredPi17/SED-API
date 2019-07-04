import model from '../models';

const {ManifestationMusculaire} = model;

class ManifMusculaire {

    static addManifestionMusculaire(req, res) {
        const {
            myalgieDiffuse, fatigueMusculaire, crampe, faiblesseMusculaire, spasmeMusculaire, contracture, courbature, dystonie, hypertonie, hypotonie,
            fasciculation, commentaire
        } = req.body;
        return ManifestationMusculaire
            .create({
                myalgieDiffuse,
                fatigueMusculaire,
                crampe,
                faiblesseMusculaire,
                spasmeMusculaire,
                contracture,
                courbature,
                dystonie,
                hypertonie,
                hypotonie,
                fasciculation,
                commentaire
            })
            .then(addManifestionMusculaire => res.status(201).send({
                success: true,
                message: 'Musculaire symptome successfully created',
                addManifestionMusculaire
            }))
    }

    static getManifestionMusculaire(req, res) {
        return ManifestationMusculaire
            .findAll()
            .then(listeManifestionMusculaire => res.status(200).send(listeManifestionMusculaire));
    }

    static updateManifestionMusculaire(req, res) {

    }

    static deleteManifestionMusculaire(req, res) {

    }
}

export default ManifMusculaire;
