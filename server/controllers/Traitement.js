import model from '../models';

const {Traitements} = model;

class Traitement {

    static addTraitement(req, res) {
        const {nom, posologie, quantite, nbParJour, dateDebut, dateDeFin, idUtilisateur} = req.body;
        return Traitements
            .create({
                nom,
                posologie,
                quantite,
                nbParJour,
                dateDebut,
                dateDeFin,
                idUtilisateur
            })
            .then(addTraitement => res.status(201).send({
                success: true,
                message: 'Traitement successfully created',
                addTraitement
            }))
    }

    static getTraitement(req, res) {
        return Traitements
            .findAll()
            .then(listeTraitement => res.status(200).send(listeTraitement));
    }

    static getOneTraitementByIdUtilisateur(req, res) {
        return Traitements
            .findOne({where: {idUtilisateur: req.params.id}})
            .then(listeTraitement => res.status(200).send(listeTraitement));
    }

    static getAllTraitementByIdUtilisateur(req, res) {
        return Traitements
            .findAll({where: {idUtilisateur: req.params.id}})
            .then(listeTraitement => res.status(200).send(listeTraitement));
    }

    static updateTraitement(req, res) {
        const {
            nom, posologie, quantite, nbParJour, dateDebut, dateDeFin
        } = req.body;
        return Traitements
            .findByPk(req.params.id)
            .then((traitement) => {
                traitement.update({
                    nom: nom || traitement.nom,
                    posologie: posologie || traitement.posologie,
                    quantite: quantite || traitement.quantite,
                    nbParJour: nbParJour || traitement.nbParJour,
                    dateDebut: dateDebut || traitement.dateDebut,
                    dateDeFin: dateDeFin || traitement.dateDeFin,
                })
                    .then((updatedtraitement) => {
                        res.status(200).send({
                            message: 'Traitement updated',
                            data: {
                                nom: nom || traitement.nom,
                                posologie: posologie || traitement.posologie,
                                quantite: quantite || traitement.quantite,
                                nbParJour: nbParJour || traitement.nbParJour,
                                dateDebut: dateDebut || traitement.dateDebut,
                                dateDeFin: dateDeFin || traitement.dateDeFin
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteTraitement(req, res) {
        return Traitements
            .findByPk(req.params.id)
            .then(traitement => {
                if (!traitement) {
                    return res.status(400).send({
                        message: 'Traitement Not Found',
                    });
                }
                return traitement
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Traitement successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default Traitement;
