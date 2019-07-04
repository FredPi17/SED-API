import model from '../models';

const {ManifestationOsteoArticulaire} = model;

class ManifOsteoArticulaire {

    static addManifestionOsteoArticulaire(req, res) {
        const {
            craquemenArticulaire, entorse, subluxation, luxation, douleurArticulaire, douleurLigamentaire, douleurTendineuse, blocageArticulaire,
            dechirureTendineuse, dechirureLigamentaire, tendinite, fracture, discopathie, arrachementOsseux, commentaire
        } = req.body;
        return ManifestationOsteoArticulaire
            .create({
                craquemenArticulaire,
                entorse,
                subluxation,
                luxation,
                douleurArticulaire,
                douleurLigamentaire,
                douleurTendineuse,
                blocageArticulaire,
                dechirureTendineuse,
                dechirureLigamentaire,
                tendinite,
                fracture,
                discopathie,
                arrachementOsseux,
                commentaire
            })
            .then(addManifOsteoArticulaire => res.status(201).send({
                success: true,
                message: 'Osteo Articulaire symptome successfully created',
                addManifOsteoArticulaire
            }))
    }

    static getManifestionOsteoArticulaire(req, res) {
        return ManifestationOsteoArticulaire
            .findAll()
            .then(listeManifestionOsteoArticulaire => res.status(200).send(listeManifestionOsteoArticulaire));
    }

    static updateManifestionOsteoArticulaire(req, res) {
        const {
            craquemenArticulaire, entorse, subluxation, luxation, douleurArticulaire, douleurLigamentaire, douleurTendineuse, blocageArticulaire,
            dechirureTendineuse, dechirureLigamentaire, tendinite, fracture, discopathie, arrachementOsseux, commentaire
        } = req.body;
        return ManifestationOsteoArticulaire
            .findByPk(req.params.id)
            .then((osteoArt) => {
                osteoArt.update({
                    craquemenArticulaire: craquemenArticulaire || osteoArt.craquemenArticulaire,
                    entorse: entorse || osteoArt.entorse,
                    subluxation: subluxation || osteoArt.subluxation,
                    luxation: luxation || osteoArt.luxation,
                    douleurArticulaire: douleurArticulaire || osteoArt.douleurArticulaire,
                    douleurLigamentaire: douleurLigamentaire || osteoArt.douleurLigamentaire,
                    douleurTendineuse: douleurTendineuse || osteoArt.douleurTendineuse,
                    blocageArticulaire: blocageArticulaire || osteoArt.blocageArticulaire,
                    dechirureTendineuse: dechirureTendineuse || osteoArt.dechirureTendineuse,
                    dechirureLigamentaire: dechirureLigamentaire || osteoArt.dechirureLigamentaire,
                    tendinite: tendinite || osteoArt.tendinite,
                    fracture: fracture || osteoArt.fracture,
                    discopathie: discopathie || osteoArt.discopathie,
                    arrachementOsseux: arrachementOsseux || osteoArt.arrachementOsseux,
                    commentaire: commentaire || osteoArt.commentaire
                })
                    .then((updatedosteoArt) => {
                        res.status(200).send({
                            message: 'Osteo Articulaire updated',
                            data: {
                                craquemenArticulaire: craquemenArticulaire || updatedosteoArt.craquemenArticulaire,
                                entorse: entorse || updatedosteoArt.entorse,
                                subluxation: subluxation || updatedosteoArt.subluxation,
                                luxation: luxation || updatedosteoArt.luxation,
                                douleurArticulaire: douleurArticulaire || updatedosteoArt.douleurArticulaire,
                                douleurLigamentaire: douleurLigamentaire || updatedosteoArt.douleurLigamentaire,
                                douleurTendineuse: douleurTendineuse || updatedosteoArt.douleurTendineuse,
                                blocageArticulaire: blocageArticulaire || updatedosteoArt.blocageArticulaire,
                                dechirureTendineuse: dechirureTendineuse || updatedosteoArt.dechirureTendineuse,
                                dechirureLigamentaire: dechirureLigamentaire || updatedosteoArt.dechirureLigamentaire,
                                tendinite: tendinite || updatedosteoArt.tendinite,
                                fracture: fracture || updatedosteoArt.fracture,
                                discopathie: discopathie || updatedosteoArt.discopathie,
                                arrachementOsseux: arrachementOsseux || updatedosteoArt.arrachementOsseux,
                                commentaire: commentaire || updatedosteoArt.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionOsteoArticulaire(req, res) {
        return ManifestationOsteoArticulaire
            .findByPk(req.params.id)
            .then(osteoArt => {
                if (!osteoArt) {
                    return res.status(400).send({
                        message: 'Osteo Articulaire Not Found',
                    });
                }
                return osteoArt
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Osteo Articulaire successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifOsteoArticulaire;
