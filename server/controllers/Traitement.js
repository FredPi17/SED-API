import model from '../models';

const {Traitements} = model;

class Traitement {

    static addTraitement(req, res) {
        const {nom, posologie, quantite, nbParJour, dateDebut, dateDeFin} = req.body;
        return Traitements
            .create({
                nom,
                posologie,
                quantite,
                nbParJour,
                dateDebut,
                dateDeFin
            })
            .then(addTraitement => res.status(201).send({
                success: true,
                message: 'Traitement urinaire successfully created',
                addTraitement
            }))
    }

    static getTraitement(req, res) {
        return Traitements
            .findAll()
            .then(listeTraitement => res.status(200).send(listeTraitement));
    }

    static updateTraitement(req, res) {

    }

    static deleteTraitement(req, res) {

    }
}

export default Traitement;
