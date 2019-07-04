import model from '../models';

const {ManifestationUrinaire} = model;

class ManifUrinaire {

    static addManifestionUrinaire(req, res) {
        const {
            bruluresMictionnelle, douleurFosseLombaire, infectionUrinaireSuspectee, infectionUrinaireAveree, pyelonephrite, coliqueNephretique, BULeucocyte, BUNitrite,
            BUSang, BUProteine, BUGlucose, BUBilirubine, BUUrobilinogene, BUCetone, BUDensite, BUPH, BUAcideAscorbique, douleurVessie, hematurieMacro, hematurieMicro,
            urineTrouble, urineMalodorante, nycturie, fuiteUrinaire, incontinenceEffort, imperiosite, gouttesRetardataire, diminutionBesoinUriner, retentionUrinaire,
            difficulteUriner, impossibiliteUriner, sensationVidangeComplete, mictionDeuxTemps, mictionPoussee, commentaire
        } = req.body;
        return ManifestationUrinaire
            .create({
                bruluresMictionnelle,
                douleurFosseLombaire,
                infectionUrinaireSuspectee,
                infectionUrinaireAveree,
                pyelonephrite,
                coliqueNephretique,
                BULeucocyte,
                BUNitrite,
                BUSang,
                BUProteine,
                BUGlucose,
                BUBilirubine,
                BUUrobilinogene,
                BUCetone,
                BUDensite,
                BUPH,
                BUAcideAscorbique,
                douleurVessie,
                hematurieMacro,
                hematurieMicro,
                urineTrouble,
                urineMalodorante,
                nycturie,
                fuiteUrinaire,
                incontinenceEffort,
                imperiosite,
                gouttesRetardataire,
                diminutionBesoinUriner,
                retentionUrinaire,
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
