import model from '../models';

const {ManifestationNeurologique} = model;

class ManifNeuro {

    static addManifestionNeuro(req, res) {
        const {
            anesthesie, hyperesthesie, paralysie, paresthesie, fourmillement, picotement, engourdissement, tremblement, fasciculation, tetanie, spasme,
            pseudoParalysie, nevralgie, hypertonieMusculaire, hypotonieMusculaire, douleurNeuropathique, commentaire, idUtilisateur
        } = req.body;
        return ManifestationNeurologique
            .create({
                anesthesie,
                hyperesthesie,
                paralysie,
                paresthesie,
                fourmillement,
                picotement,
                engourdissement,
                tremblement,
                fasciculation,
                tetanie,
                spasme,
                pseudoParalysie,
                nevralgie,
                hypertonieMusculaire,
                hypotonieMusculaire,
                douleurNeuropathique,
                commentaire,
                idUtilisateur
            })
            .then(addManifNeuro => res.status(201).send({
                success: true,
                message: 'Neuro symptome successfully created',
                addManifNeuro
            }))
    }

    static getManifestionNeuro(req, res) {
        return ManifestationNeurologique
            .findAll()
            .then(listeManifestionNeuro => res.status(200).send(listeManifestionNeuro));
    }

    static getOneManifestionNeuroByIdUtilisateur(req, res) {
        return ManifestationNeurologique
            .findOne({where: {idUtilisateur: req.params.id}})
            .then(listeManifestionNeuro => res.status(200).send(listeManifestionNeuro));
    }

    static getAllManifestionNeuroByIdUtilisateur(req, res) {
        return ManifestationNeurologique
            .findAll({where: {idUtilisateur: req.params.id}})
            .then(listeManifestionNeuro => res.status(200).send(listeManifestionNeuro));
    }

    static updateManifestionNeuro(req, res) {
        const {
            anesthesie, hyperesthesie, paralysie, paresthesie, fourmillement, picotement, engourdissement, tremblement, fasciculation, tetanie, spasme,
            pseudoParalysie, nevralgie, hypertonieMusculaire, hypotonieMusculaire, douleurNeuropathique, commentaire
        } = req.body;
        return ManifestationNeurologique
            .findByPk(req.params.id)
            .then((neuro) => {
                neuro.update({
                    anesthesie: anesthesie || neuro.anesthesie,
                    hyperesthesie: hyperesthesie || neuro.hyperesthesie,
                    paralysie: paralysie || neuro.paralysie,
                    paresthesie: paresthesie || neuro.paresthesie,
                    fourmillement: fourmillement || neuro.fourmillement,
                    picotement: picotement || neuro.picotement,
                    engourdissement: engourdissement || neuro.engourdissement,
                    tremblement: tremblement || neuro.tremblement,
                    fasciculation: fasciculation || neuro.fasciculation,
                    tetanie: tetanie || neuro.tetanie,
                    spasme: spasme || neuro.spasme,
                    pseudoParalysie: pseudoParalysie || neuro.pseudoParalysie,
                    nevralgie: nevralgie || neuro.nevralgie,
                    hypertonieMusculaire: hypertonieMusculaire || neuro.hypertonieMusculaire,
                    hypotonieMusculaire: hypotonieMusculaire || neuro.hypotonieMusculaire,
                    douleurNeuropathique: douleurNeuropathique || neuro.douleurNeuropathique,
                    commentaire: commentaire || neuro.commentaire
                })
                    .then((updatedneuro) => {
                        res.status(200).send({
                            message: 'neuro updated',
                            data: {
                                anesthesie: anesthesie || updatedneuro.anesthesie,
                                hyperesthesie: hyperesthesie || updatedneuro.hyperesthesie,
                                paralysie: paralysie || updatedneuro.paralysie,
                                paresthesie: paresthesie || updatedneuro.paresthesie,
                                fourmillement: fourmillement || updatedneuro.fourmillement,
                                picotement: picotement || updatedneuro.picotement,
                                engourdissement: engourdissement || updatedneuro.engourdissement,
                                tremblement: tremblement || updatedneuro.tremblement,
                                fasciculation: fasciculation || updatedneuro.fasciculation,
                                tetanie: tetanie || updatedneuro.tetanie,
                                spasme: spasme || updatedneuro.spasme,
                                pseudoParalysie: pseudoParalysie || updatedneuro.pseudoParalysie,
                                nevralgie: nevralgie || updatedneuro.nevralgie,
                                hypertonieMusculaire: hypertonieMusculaire || updatedneuro.hypertonieMusculaire,
                                hypotonieMusculaire: hypotonieMusculaire || updatedneuro.hypotonieMusculaire,
                                douleurNeuropathique: douleurNeuropathique || updatedneuro.douleurNeuropathique,
                                commentaire: commentaire || updatedneuro.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionNeuro(req, res) {
        return ManifestationNeurologique
            .findByPk(req.params.id)
            .then(neuro => {
                if (!neuro) {
                    return res.status(400).send({
                        message: 'Neurologie Not Found',
                    });
                }
                return neuro
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Neurologie successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifNeuro;
