import model from '../models';

const {ManifestationOphtamologique} = model;

class ManifOphtalmo {

    static addManifestionOphtalmo(req, res) {
        const {
            secheresseOculaire, larmoiement, douleurOculaire, douleurArriereOeil, sensibiliteLumiere, corpsFlottant, fatigueVisuelle, flouVisuel, diplopie,
            baisseAcuiteVisuelPassagere, yeuxRouge, demangeaisonOculaire, heterophorie, conjonctiviteAllergique, conjonctivite, blepharite, keratocone,
            migraineOphtalmique, commentaire, IdUtilisateur
        } = req.body;
        return ManifestationOphtamologique
            .create({
                secheresseOculaire,
                larmoiement,
                douleurOculaire,
                douleurArriereOeil,
                sensibiliteLumiere,
                corpsFlottant,
                fatigueVisuelle,
                flouVisuel,
                diplopie,
                baisseAcuiteVisuelPassagere,
                yeuxRouge,
                demangeaisonOculaire,
                heterophorie,
                conjonctiviteAllergique,
                conjonctivite,
                blepharite,
                keratocone,
                migraineOphtalmique,
                commentaire,
                IdUtilisateur
            })
            .then(addManifestionOphtalmo => res.status(201).send({
                success: true,
                message: 'Ophtalmo symptome successfully created',
                addManifestionOphtalmo
            }))
    }

    static getManifestionOphtalmo(req, res) {
        return ManifestationOphtamologique
            .findAll()
            .then(listeManifestionOphtalmo => res.status(200).send(listeManifestionOphtalmo));
    }

    static getOneManifestionOphtalmoByIdUtilisateur(req, res) {
        return ManifestationOphtamologique
            .findOne({limit: 1, where: {idUtilisateur: req.params.id}, order: [['id', 'DESC']]})
            .then(listeManifestionOphtalmo => res.status(200).send(listeManifestionOphtalmo));
    }

    static getAllManifestionOphtalmoByIdUtilisateur(req, res) {
        return ManifestationOphtamologique
            .findAll({where: {idUtilisateur: req.params.id}})
            .then(listeManifestionOphtalmo => res.status(200).send(listeManifestionOphtalmo));
    }

    static updateManifestionOphtalmo(req, res) {
        const {
            secheresseOculaire, larmoiement, douleurOculaire, douleurArriereOeil, sensibiliteLumiere, corpsFlottant, fatigueVisuelle, flouVisuel, diplopie,
            baisseAcuiteVisuelPassagere, yeuxRouge, demangeaisonOculaire, heterophorie, conjonctiviteAllergique, conjonctivite, blepharite, keratocone,
            migraineOphtalmique, commentaire
        } = req.body;
        return ManifestationOphtamologique
            .findByPk(req.params.id)
            .then((ophtalmo) => {
                ophtalmo.update({
                    secheresseOculaire: secheresseOculaire || ophtalmo.secheresseOculaire,
                    larmoiement: larmoiement || ophtalmo.larmoiement,
                    douleurOculaire: douleurOculaire || ophtalmo.douleurOculaire,
                    douleurArriereOeil: douleurArriereOeil || ophtalmo.douleurArriereOeil,
                    sensibiliteLumiere: sensibiliteLumiere || ophtalmo.sensibiliteLumiere,
                    corpsFlottant: corpsFlottant || ophtalmo.corpsFlottant,
                    fatigueVisuelle: fatigueVisuelle || ophtalmo.fatigueVisuelle,
                    flouVisuel: flouVisuel || ophtalmo.flouVisuel,
                    diplopie: diplopie || ophtalmo.diplopie,
                    baisseAcuiteVisuelPassagere: baisseAcuiteVisuelPassagere || ophtalmo.baisseAcuiteVisuelPassagere,
                    yeuxRouge: yeuxRouge || ophtalmo.yeuxRouge,
                    demangeaisonOculaire: demangeaisonOculaire || ophtalmo.demangeaisonOculaire,
                    heterophorie: heterophorie || ophtalmo.heterophorie,
                    conjonctiviteAllergique: conjonctiviteAllergique || ophtalmo.conjonctiviteAllergique,
                    conjonctivite: conjonctivite || ophtalmo.conjonctivite,
                    blepharite: blepharite || ophtalmo.blepharite,
                    keratocone: keratocone || ophtalmo.keratocone,
                    migraineOphtalmique: migraineOphtalmique || ophtalmo.migraineOphtalmique,
                    commentaire: commentaire || ophtalmo.commentaire
                })
                    .then((updatedophtalmo) => {
                        res.status(200).send({
                            message: 'ophtalmo updated',
                            data: {
                                secheresseOculaire: secheresseOculaire || updatedophtalmo.secheresseOculaire,
                                larmoiement: larmoiement || updatedophtalmo.larmoiement,
                                douleurOculaire: douleurOculaire || updatedophtalmo.douleurOculaire,
                                douleurArriereOeil: douleurArriereOeil || updatedophtalmo.douleurArriereOeil,
                                sensibiliteLumiere: sensibiliteLumiere || updatedophtalmo.sensibiliteLumiere,
                                corpsFlottant: corpsFlottant || updatedophtalmo.corpsFlottant,
                                fatigueVisuelle: fatigueVisuelle || updatedophtalmo.fatigueVisuelle,
                                flouVisuel: flouVisuel || updatedophtalmo.flouVisuel,
                                diplopie: diplopie || updatedophtalmo.diplopie,
                                baisseAcuiteVisuelPassagere: baisseAcuiteVisuelPassagere || updatedophtalmo.baisseAcuiteVisuelPassagere,
                                yeuxRouge: yeuxRouge || updatedophtalmo.yeuxRouge,
                                demangeaisonOculaire: demangeaisonOculaire || updatedophtalmo.demangeaisonOculaire,
                                heterophorie: heterophorie || updatedophtalmo.heterophorie,
                                conjonctiviteAllergique: conjonctiviteAllergique || updatedophtalmo.conjonctiviteAllergique,
                                conjonctivite: conjonctivite || updatedophtalmo.conjonctivite,
                                blepharite: blepharite || updatedophtalmo.blepharite,
                                keratocone: keratocone || updatedophtalmo.keratocone,
                                migraineOphtalmique: migraineOphtalmique || updatedophtalmo.migraineOphtalmique,
                                commentaire: commentaire || updatedophtalmo.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionOphtalmo(req, res) {
        return ManifestationOphtamologique
            .findByPk(req.params.id)
            .then(ophtalmo => {
                if (!ophtalmo) {
                    return res.status(400).send({
                        message: 'Ophtalmo Not Found',
                    });
                }
                return ophtalmo
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Ophtalmo successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifOphtalmo;
