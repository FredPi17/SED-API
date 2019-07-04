import model from '../models';

const {ManifestationUrinaire} = model;

class ManifUrinaire {

    static addManifestionUrinaire(req, res) {
        const {
            brulureMictionnelle, douleurFosseLombaire, infectionUrinaireSuspectee, infectionUrinaireAveree, pyelonephrite, coliqueNephretique, douleurVessie,
            hematurieMacro, hematurieMicro, urineMalodorante, urineTrouble, nycturie, fuiteUrinaire, incontinenceEffort, imperiosite, goutteRetardataire,
            diminutionBesoinUriner, retentionUrine, difficulteUriner, impossibiliteUriner, sensationVidangeComplete, mictionDeuxTemps, mictionPoussee,
            commentaire
        } = req.body;
        return ManifestationUrinaire
            .create({
                brulureMictionnelle,
                douleurFosseLombaire,
                infectionUrinaireSuspectee,
                infectionUrinaireAveree,
                pyelonephrite,
                coliqueNephretique,
                douleurVessie,
                hematurieMacro,
                hematurieMicro,
                urineMalodorante,
                urineTrouble,
                nycturie,
                fuiteUrinaire,
                incontinenceEffort,
                imperiosite,
                goutteRetardataire,
                diminutionBesoinUriner,
                retentionUrine,
                difficulteUriner,
                impossibiliteUriner,
                sensationVidangeComplete,
                mictionDeuxTemps,
                mictionPoussee,
                commentaire
            })
            .then(addManifestionUrinaire => res.status(201).send({
                success: true,
                message: 'Manifestation urinaire successfully created',
                addManifestionUrinaire
            }))
    }

    static getManifestionUrinaire(req, res) {
        return ManifestationUrinaire
            .findAll()
            .then(listeManifestionUrinaire => res.status(200).send(listeManifestionUrinaire));
    }

    static updateManifestionUrinaire(req, res) {

    }

    static deleteManifestionUrinaire(req, res) {

    }
}

export default ManifUrinaire;
