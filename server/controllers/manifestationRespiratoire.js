import model from '../models';

const {ManifestationRespiratoire} = model;

class ManifRespi {

    static addManifestionRespi(req, res) {
        const {
            essouflementEffort, essouflementRepos, sensationBlocageDiaphragmatique, bradyapnee, tachyapnee, respirationSifflante, criseRespiratoireAngoissante,
            sensationOppressionThoracique, encombrementBronchique, glaireFondrespi, expectorationSanglante, blocageRespiratoire, criseAsthme, touxSeche, touxGrasse,
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
                glaireFondrespi,
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
        const {
            essouflementEffort, essouflementRepos, sensationBlocageDiaphragmatique, bradyapnee, tachyapnee, respirationSifflante, criseRespiratoireAngoissante,
            sensationOppressionThoracique, encombrementBronchique, glaireFondrespi, expectorationSanglante, blocageRespiratoire, criseAsthme, touxSeche, touxGrasse,
            dysphonie, aphonie, douleurRespiratoire, infectionVoieAerienneSuperieur, bronchite, pneumopathie, saturationOxygene, commentaire
        } = req.body;
        return ManifestationRespiratoire
            .findByPk(req.params.id)
            .then((respi) => {
                respi.update({
                    essouflementEffort: essouflementEffort || respi.essouflementEffort,
                    essouflementRepos: essouflementRepos || respi.essouflementRepos,
                    sensationBlocageDiaphragmatique: sensationBlocageDiaphragmatique || respi.sensationBlocageDiaphragmatique,
                    bradyapnee: bradyapnee || respi.bradyapnee,
                    tachyapnee: tachyapnee || respi.tachyapnee,
                    respirationSifflante: respirationSifflante || respi.respirationSifflante,
                    criseRespiratoireAngoissante: criseRespiratoireAngoissante || respi.criseRespiratoireAngoissante,
                    sensationOppressionThoracique: sensationOppressionThoracique || respi.sensationOppressionThoracique,
                    encombrementBronchique: encombrementBronchique || respi.encombrementBronchique,
                    glaireFondrespi: glaireFondrespi || respi.glaireFondrespi,
                    expectorationSanglante: expectorationSanglante || respi.expectorationSanglante,
                    blocageRespiratoire: blocageRespiratoire || respi.blocageRespiratoire,
                    criseAsthme: criseAsthme || respi.criseAsthme,
                    touxSeche: touxSeche || respi.touxSeche,
                    touxGrasse: touxGrasse || respi.touxGrasse,
                    dysphonie: dysphonie || respi.dysphonie,
                    aphonie: aphonie || respi.aphonie,
                    douleurRespiratoire: douleurRespiratoire || respi.douleurRespiratoire,
                    infectionVoieAerienneSuperieur: infectionVoieAerienneSuperieur || respi.infectionVoieAerienneSuperieur,
                    bronchite: bronchite || respi.bronchite,
                    pneumopathie: pneumopathie || respi.pneumopathie,
                    saturationOxygene: saturationOxygene || respi.saturationOxygene,
                    commentaire: commentaire || respi.commentaire
                })
                    .then((updatedrespi) => {
                        res.status(200).send({
                            message: 'respi updated',
                            data: {
                                essouflementEffort: essouflementEffort || updatedrespi.essouflementEffort,
                                essouflementRepos: essouflementRepos || updatedrespi.essouflementRepos,
                                sensationBlocageDiaphragmatique: sensationBlocageDiaphragmatique || updatedrespi.sensationBlocageDiaphragmatique,
                                bradyapnee: bradyapnee || updatedrespi.bradyapnee,
                                tachyapnee: tachyapnee || updatedrespi.tachyapnee,
                                respirationSifflante: respirationSifflante || updatedrespi.respirationSifflante,
                                criseRespiratoireAngoissante: criseRespiratoireAngoissante || updatedrespi.criseRespiratoireAngoissante,
                                sensationOppressionThoracique: sensationOppressionThoracique || updatedrespi.sensationOppressionThoracique,
                                encombrementBronchique: encombrementBronchique || updatedrespi.encombrementBronchique,
                                glaireFondrespi: glaireFondrespi || updatedrespi.glaireFondrespi,
                                expectorationSanglante: expectorationSanglante || updatedrespi.expectorationSanglante,
                                blocageRespiratoire: blocageRespiratoire || updatedrespi.blocageRespiratoire,
                                criseAsthme: criseAsthme || updatedrespi.criseAsthme,
                                touxSeche: touxSeche || updatedrespi.touxSeche,
                                touxGrasse: touxGrasse || updatedrespi.touxGrasse,
                                dysphonie: dysphonie || updatedrespi.dysphonie,
                                aphonie: aphonie || updatedrespi.aphonie,
                                douleurRespiratoire: douleurRespiratoire || updatedrespi.douleurRespiratoire,
                                infectionVoieAerienneSuperieur: infectionVoieAerienneSuperieur || updatedrespi.infectionVoieAerienneSuperieur,
                                bronchite: bronchite || updatedrespi.bronchite,
                                pneumopathie: pneumopathie || updatedrespi.pneumopathie,
                                saturationOxygene: saturationOxygene || updatedrespi.saturationOxygene,
                                commentaire: commentaire || updatedrespi.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionRespi(req, res) {
        return ManifestationRespiratoire
            .findByPk(req.params.id)
            .then(respi => {
                if (!respi) {
                    return res.status(400).send({
                        message: 'Respiratoire Not Found',
                    });
                }
                return respi
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Respiratoire successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifRespi;
