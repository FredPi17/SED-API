import model from '../models';

const {ManifestationBuccoDentaire} = model;

class ManifBuccoDent {

    static addManifestionBuccoDent(req, res) {
        const {
            douleurDentaire, douleurGingivale, saignementgingival, hypersensibiliteDentaire, colletDentaireDouleur, bruxisme, gingivite, anesthesiePasEfficace,
            alterationGencive, dechaussementDentaire, secheresseBuccale, hypersialorhee, boutonFievre, mauvaiseHaleine, aphte, abces, parodontite, emailErode, carie,
            commentaire, idUtilisateur
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
                commentaire,
                idUtilisateur
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

    static getOneManifestionBuccoDentByIdUtilisateur(req, res) {
        return ManifestationBuccoDentaire
            .findOne({where: {idUtilisateur: req.params.id}})
            .then(listeManifestionBuccoDent => res.status(200).send(listeManifestionBuccoDent));
    }

    static getAllManifestionBuccoDentByIdUtilisateur(req, res) {
        return ManifestationBuccoDentaire
            .findAll({where: {idUtilisateur: req.params.id}})
            .then(listeManifestionBuccoDent => res.status(200).send(listeManifestionBuccoDent));
    }

    static updateManifestionBuccoDent(req, res) {
        const {
            douleurDentaire, douleurGingivale, saignementgingival, hypersensibiliteDentaire, colletDentaireDouleur, bruxisme, gingivite, anesthesiePasEfficace,
            alterationGencive, dechaussementDentaire, secheresseBuccale, hypersialorhee, boutonFievre, mauvaiseHaleine, aphte, abces, parodontite, emailErode, carie,
            commentaire
        } = req.body;
        return ManifestationBuccoDentaire
            .findByPk(req.params.id)
            .then((buccoDent) => {
                buccoDent.update({
                    douleurDentaire: douleurDentaire || buccoDent.douleurDentaire,
                    douleurGingivale: douleurGingivale || buccoDent.douleurGingivale,
                    saignementgingival: saignementgingival || buccoDent.saignementgingival,
                    hypersensibiliteDentaire: hypersensibiliteDentaire || buccoDent.hypersensibiliteDentaire,
                    colletDentaireDouleur: colletDentaireDouleur || buccoDent.colletDentaireDouleur,
                    bruxisme: bruxisme || buccoDent.bruxisme,
                    gingivite: gingivite || buccoDent.gingivite,
                    anesthesiePasEfficace: anesthesiePasEfficace || buccoDent.anesthesiePasEfficace,
                    alterationGencive: alterationGencive || buccoDent.alterationGencive,
                    dechaussementDentaire: dechaussementDentaire || buccoDent.dechaussementDentaire,
                    secheresseBuccale: secheresseBuccale || buccoDent.secheresseBuccale,
                    hypersialorhee: hypersialorhee || buccoDent.hypersialorhee,
                    boutonFievre: boutonFievre || buccoDent.boutonFievre,
                    mauvaiseHaleine: mauvaiseHaleine || buccoDent.mauvaiseHaleine,
                    aphte: aphte || buccoDent.aphte,
                    abces: abces || buccoDent.abces,
                    parodontite: parodontite || buccoDent.parodontite,
                    emailErode: emailErode || buccoDent.emailErode,
                    carie: carie || buccoDent.carie,
                    commentaire: commentaire || buccoDent.commentaire
                })
                    .then((updatedBuccoDent) => {
                        res.status(200).send({
                            message: 'Gorge updated',
                            data: {
                                douleurDentaire: douleurDentaire || updatedBuccoDent.douleurDentaire,
                                douleurGingivale: douleurGingivale || updatedBuccoDent.douleurGingivale,
                                saignementgingival: saignementgingival || updatedBuccoDent.saignementgingival,
                                hypersensibiliteDentaire: hypersensibiliteDentaire || updatedBuccoDent.hypersensibiliteDentaire,
                                colletDentaireDouleur: colletDentaireDouleur || updatedBuccoDent.colletDentaireDouleur,
                                bruxisme: bruxisme || updatedBuccoDent.bruxisme,
                                gingivite: gingivite || updatedBuccoDent.gingivite,
                                anesthesiePasEfficace: anesthesiePasEfficace || updatedBuccoDent.anesthesiePasEfficace,
                                alterationGencive: alterationGencive || updatedBuccoDent.alterationGencive,
                                dechaussementDentaire: dechaussementDentaire || updatedBuccoDent.dechaussementDentaire,
                                secheresseBuccale: secheresseBuccale || updatedBuccoDent.secheresseBuccale,
                                hypersialorhee: hypersialorhee || updatedBuccoDent.hypersialorhee,
                                boutonFievre: boutonFievre || updatedBuccoDent.boutonFievre,
                                mauvaiseHaleine: mauvaiseHaleine || updatedBuccoDent.mauvaiseHaleine,
                                aphte: aphte || updatedBuccoDent.aphte,
                                abces: abces || updatedBuccoDent.abces,
                                parodontite: parodontite || updatedBuccoDent.parodontite,
                                emailErode: emailErode || updatedBuccoDent.emailErode,
                                carie: carie || updatedBuccoDent.carie,
                                commentaire: commentaire || updatedBuccoDent.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionBuccoDent(req, res) {
        return ManifestationBuccoDentaire
            .findByPk(req.params.id)
            .then(buccoDent => {
                if (!buccoDent) {
                    return res.status(400).send({
                        message: 'BuccoDent Not Found',
                    });
                }
                return buccoDent
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'BuccoDent successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifBuccoDent;
