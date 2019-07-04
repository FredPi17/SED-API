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
        const {
            myalgieDiffuse, fatigueMusculaire, crampe, faiblesseMusculaire, spasmeMusculaire, contracture, courbature, dystonie, hypertonie, hypotonie,
            fasciculation, commentaire
        } = req.body;
        return ManifestationMusculaire
            .findByPk(req.params.id)
            .then((musculaire) => {
                musculaire.update({
                    myalgieDiffuse: myalgieDiffuse || musculaire.myalgieDiffuse,
                    fatigueMusculaire: fatigueMusculaire || musculaire.fatigueMusculaire,
                    crampe: crampe || musculaire.crampe,
                    faiblesseMusculaire: faiblesseMusculaire || musculaire.faiblesseMusculaire,
                    spasmeMusculaire: spasmeMusculaire || musculaire.spasmeMusculaire,
                    contracture: contracture || musculaire.contracture,
                    courbature: courbature || musculaire.courbature,
                    dystonie: dystonie || musculaire.dystonie,
                    hypertonie: hypertonie || musculaire.hypertonie,
                    hypotonie: hypotonie || musculaire.hypotonie,
                    fasciculation: fasciculation || musculaire.fasciculation,
                    commentaire: commentaire || musculaire.commentaire
                })
                    .then((updatedmusculaire) => {
                        res.status(200).send({
                            message: 'musculaire updated',
                            data: {
                                myalgieDiffuse: myalgieDiffuse || updatedmusculaire.myalgieDiffuse,
                                fatigueMusculaire: fatigueMusculaire || updatedmusculaire.fatigueMusculaire,
                                crampe: crampe || updatedmusculaire.crampe,
                                faiblesseMusculaire: faiblesseMusculaire || updatedmusculaire.faiblesseMusculaire,
                                spasmeMusculaire: spasmeMusculaire || updatedmusculaire.spasmeMusculaire,
                                contracture: contracture || updatedmusculaire.contracture,
                                courbature: courbature || updatedmusculaire.courbature,
                                dystonie: dystonie || updatedmusculaire.dystonie,
                                hypertonie: hypertonie || updatedmusculaire.hypertonie,
                                hypotonie: hypotonie || updatedmusculaire.hypotonie,
                                fasciculation: fasciculation || updatedmusculaire.fasciculation,
                                commentaire: commentaire || updatedmusculaire.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionMusculaire(req, res) {
        return ManifestationMusculaire
            .findByPk(req.params.id)
            .then(musculaire => {
                if (!musculaire) {
                    return res.status(400).send({
                        message: 'Musculaire Not Found',
                    });
                }
                return musculaire
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Musculaire successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifMusculaire;
