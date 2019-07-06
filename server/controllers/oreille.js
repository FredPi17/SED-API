import model from '../models';

const {Oreille} = model;

class OreilleSymptome {

    static addOreilleSymptome(req, res) {
        const {
            hyperacousie, hypoacousie, acouphene, bourdonnement, saignementOreille, ecoulementOreille, otite, vertigeVrai,
            sensationVertige, commentaire, idUtilisateur
        } = req.body;
        return Oreille
            .create({
                hyperacousie,
                hypoacousie,
                acouphene,
                bourdonnement,
                saignementOreille,
                ecoulementOreille,
                otite,
                vertigeVrai,
                sensationVertige,
                commentaire,
                idUtilisateur
            })
            .then(addoreilleSymptome => res.status(201).send({
                success: true,
                message: 'oreille symptome successfully created',
                addoreilleSymptome
            }))
    }

    static getOreilleSymptomes(req, res) {
        return Oreille
            .findAll()
            .then(listeOreilleSymptome => res.status(200).send(listeOreilleSymptome));
    }

    static getOneOreilleSymptomesByIdUtilisateur(req, res) {
        return Oreille
            .findOne({where: {idUtilisateur: req.params.id}})
            .then(listeOreilleSymptome => res.status(200).send(listeOreilleSymptome));
    }

    static getAllOreilleSymptomesByIdUtilisateur(req, res) {
        return Oreille
            .findAll({where: {idUtilisateur: req.params.id}})
            .then(listeOreilleSymptome => res.status(200).send(listeOreilleSymptome));
    }

    static updateOreilleSymptome(req, res) {
        const {
            hyperacousie, hypoacousie, acouphene, bourdonnement, saignementOreille, ecoulementOreille, otite, vertigeVrai,
            sensationVertige, commentaire
        } = req.body;
        return Oreille
            .findByPk(req.params.id)
            .then((oreille) => {
                oreille.update({
                    hyperacousie: hyperacousie || oreille.hyperacousie,
                    hypoacousie: hypoacousie || oreille.hypoacousie,
                    acouphene: acouphene || oreille.acouphene,
                    bourdonnement: bourdonnement || oreille.bourdonnement,
                    saignementOreille: saignementOreille || oreille.saignementOreille,
                    ecoulementOreille: ecoulementOreille || oreille.ecoulementOreille,
                    otite: otite || oreille.otite,
                    vertigeVrai: vertigeVrai || oreille.vertigeVrai,
                    sensationVertige: sensationVertige || oreille.sensationVertige,
                    commentaire: commentaire || oreille.commentaire
                })
                    .then((updatedoreille) => {
                        res.status(200).send({
                            message: 'oreille updated',
                            data: {
                                hyperacousie: hyperacousie || oreille.hyperacousie,
                                hypoacousie: hypoacousie || oreille.hypoacousie,
                                acouphene: acouphene || oreille.acouphene,
                                bourdonnement: bourdonnement || oreille.bourdonnement,
                                saignementOreille: saignementOreille || oreille.saignementOreille,
                                ecoulementOreille: ecoulementOreille || oreille.ecoulementOreille,
                                otite: otite || oreille.otite,
                                vertigeVrai: vertigeVrai || oreille.vertigeVrai,
                                sensationVertige: sensationVertige || oreille.sensationVertige,
                                commentaire: commentaire || oreille.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteOreilleSymptome(req, res) {
        return Oreille
            .findByPk(req.params.id)
            .then(oreille => {
                if (!oreille) {
                    return res.status(400).send({
                        message: 'Oreille Not Found',
                    });
                }
                return oreille
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Oreille successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default OreilleSymptome;
