import model from '../models';

const {ManifestationRespiratoire} = model;

class ManifRespi {

    static addManifestionRespi(req, res) {
        const {
            essouflementEffort, essouflementRepos, sensationBlocageDiaphragmatique, bradyapnee, tachyapnee, respirationSifflante, criseRespiratoireAngoissante,
            sensationOppressionThoracique, encombrementBronchique, glaireFondGorge, expectorationSanglante, blocageRespiratoire, criseAsthme, touxSeche, touxGrasse,
            dysphonie, aphonie, douleurRespiratoire, infectionVoieAerienneSuperieur, bronchite, pneumopathie, saturationOxygene, commentaire
        } = req.body;
        return ManifestationRespiratoire
            .create({
                essouflementEffort,
                essouflementRepos,
                sensationBlocageDiaphragmatique,
                bradyapnee,
                tachyapnee,
                respirationSifflante,
                criseRespiratoireAngoissante,
                sensationOppressionThoracique,
                encombrementBronchique,
                glaireFondGorge,
                expectorationSanglante,
                blocageRespiratoire,
                criseAsthme,
                touxSeche,
                touxGrasse,
                dysphonie,
                aphonie,
                douleurRespiratoire,
                infectionVoieAerienneSuperieur,
                bronchite,
                pneumopathie,
                saturationOxygene,
                commentaire
            })
            .then(addManifestionRespi => res.status(201).send({
                success: true,
                message: 'Manifestation respi successfully created',
                addManifestionRespi
            }))
    }

    static getManifestionRespi(req, res) {
        return ManifestationRespiratoire
            .findAll()
            .then(listeManifestionRespi => res.status(200).send(listeManifestionRespi));
    }

    static updateManifestionRespi(req, res) {

    }

    static deleteManifestionRespi(req, res) {

    }
}

export default ManifRespi;
