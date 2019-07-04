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

    }

    static deleteManifestionOsteoArticulaire(req, res) {

    }
}

export default ManifOsteoArticulaire;
