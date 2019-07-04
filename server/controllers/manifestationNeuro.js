import model from '../models';

const {ManifestationNeurologique} = model;

class ManifNeuro {

    static addManifestionNeuro(req, res) {
        const {
            anesthesie, hyperesthesie, paralysie, paresthesie, fourmillement, picotement, engourdissement, tremblement, fasciculation, tetanie, spasme,
            pseudoParalysie, nevralgie, hypertonieMusculaire, hypotonieMusculaire, douleurNeuropathique, commentaire
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
                commentaire
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

    static updateManifestionNeuro(req, res) {

    }

    static deleteManifestionNeuro(req, res) {

    }
}

export default ManifNeuro;
