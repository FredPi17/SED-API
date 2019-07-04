import model from '../models';

const {ManifestationBuccoDentaire} = model;

class ManifBuccoDent {

    static addManifestionBuccoDent(req, res) {
        const {
            douleurDentaire, douleurGingivale, saignementgingival, hypersensibiliteDentaire, colletDentaireDouleur, bruxisme, gingivite, anesthesiePasEfficace,
            alterationGencive, dechaussementDentaire, secheresseBuccale, hypersialorhee, boutonFievre, mauvaiseHaleine, aphte, abces, parodontite, emailErode, carie,
            commentaire
        } = req.body;
        return ManifestationBuccoDentaire
            .create({
                douleurDentaire,
                douleurGingivale,
                saignementgingival,
                hypersensibiliteDentaire,
                colletDentaireDouleur,
                bruxisme,
                gingivite,
                anesthesiePasEfficace,
                alterationGencive,
                dechaussementDentaire,
                secheresseBuccale,
                hypersialorhee,
                boutonFievre,
                mauvaiseHaleine,
                aphte,
                abces,
                parodontite,
                emailErode,
                carie,
                commentaire
            })
            .then(addManifestionBuccoDent => res.status(201).send({
                success: true,
                message: 'Manifestation bucco dentaire successfully created',
                addManifestionBuccoDent
            }))
    }

    static getManifestionBuccoDent(req, res) {
        return ManifestationBuccoDentaire
            .findAll()
            .then(listeManifestionBuccoDent => res.status(200).send(listeManifestionBuccoDent));
    }

    static updateManifestionBuccoDent(req, res) {

    }

    static deleteManifestionBuccoDent(req, res) {

    }
}

export default ManifBuccoDent;
