import model from '../models';

const {ManifestationOphtamologique} = model;

class ManifOphtalmo {

    static addManifestionOphtalmo(req, res) {
        const {
            secheresseOculaire, larmoiement, douleurOculaire, douleurArriereOeil, sensibiliteLumiere, corpsFlottant, fatigueVisuelle, flouVisuel, diplopie,
            baisseAcuiteVisuelPassagere, yeuxRouge, demangeaisonOculaire, heterophorie, conjonctiviteAllergique, conjonctivite, blepharite, keratocone,
            migraineOphtalmique, commentaire
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
                commentaire
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

    static updateManifestionOphtalmo(req, res) {

    }

    static deleteManifestionOphtalmo(req, res) {

    }
}

export default ManifOphtalmo;
