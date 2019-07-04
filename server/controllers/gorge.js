import model from '../models';

const {Gorge} = model;

class GorgeSymptome {

    static addGorgeSymptome(req, res) {
        const {mauxGorge, gorgeQuiGratte, gorgeIrritee, douleurAigueGorge, deglutitionDouloureuse, troubleGout, raclementGorge, ecoulementArriereGorge, dysphonie, aphonie, enrouement, angine, pharyngite, laryngite, tracheite, adenopathie, commentaire} = req.body;
        return Gorge
            .create({
                mauxGorge,
                gorgeQuiGratte,
                gorgeIrritee,
                douleurAigueGorge,
                deglutitionDouloureuse,
                troubleGout,
                raclementGorge,
                ecoulementArriereGorge,
                dysphonie,
                aphonie,
                enrouement,
                angine,
                pharyngite,
                laryngite,
                tracheite,
                adenopathie,
                commentaire
            })
            .then(addGorgeSymptome => res.status(201).send({
                success: true,
                message: 'Gorge symptome successfully created',
                addGorgeSymptome
            }))
    }

    static getGorgeSymptomes(req, res) {
        return Gorge
            .findAll()
            .then(listeGorgeSymptome => res.status(200).send(listeGorgeSymptome));
    }

    static updateGorgeSymptome(req, res) {
        const {
            mauxGorge, gorgeQuiGratte, gorgeIrritee, douleurAigueGorge, deglutitionDouloureuse, troubleGout, raclementGorge,
            ecoulementArriereGorge, dysphonie, aphonie, enrouement, angine, pharyngite, laryngite, tracheite, adenopathie, commentaire
        } = req.body;
        return Gorge
            .findByPk(req.params.id)
            .then((gorge) => {
                gorge.update({
                    mauxGorge: mauxGorge || gorge.mauxGorge,
                    gorgeQuiGratte: gorgeQuiGratte || gorge.gorgeQuiGratte,
                    gorgeIrritee: gorgeIrritee || gorge.gorgeIrritee,
                    douleurAigueGorge: douleurAigueGorge || gorge.douleurAigueGorge,
                    deglutitionDouloureuse: deglutitionDouloureuse || gorge.deglutitionDouloureuse,
                    troubleGout: troubleGout || gorge.troubleGout,
                    raclementGorge: raclementGorge || gorge.raclementGorge,
                    ecoulementArriereGorge: ecoulementArriereGorge || gorge.ecoulementArriereGorge,
                    dysphonie: dysphonie || gorge.dysphonie,
                    aphonie: aphonie || gorge.aphonie,
                    enrouement: enrouement || gorge.enrouement,
                    angine: angine || gorge.angine,
                    pharyngite: pharyngite || gorge.pharyngite,
                    laryngite: laryngite || gorge.laryngite,
                    tracheite: tracheite || gorge.tracheite,
                    adenopathie: adenopathie || gorge.adenopathie,
                    commentaire: commentaire || gorge.commentaire
                })
                    .then((updatedGorge) => {
                        res.status(200).send({
                            message: 'Gorge updated',
                            data: {
                                mauxGorge: mauxGorge || updatedGorge.mauxGorge,
                                gorgeQuiGratte: gorgeQuiGratte || updatedGorge.gorgeQuiGratte,
                                gorgeIrritee: gorgeIrritee || updatedGorge.gorgeIrritee,
                                douleurAigueGorge: douleurAigueGorge || updatedGorge.douleurAigueGorge,
                                deglutitionDouloureuse: deglutitionDouloureuse || updatedGorge.deglutitionDouloureuse,
                                troubleGout: troubleGout || updatedGorge.troubleGout,
                                raclementGorge: raclementGorge || gorge.raclementGorge,
                                ecoulementArriereGorge: ecoulementArriereGorge || updatedGorge.ecoulementArriereGorge,
                                dysphonie: dysphonie || updatedGorge.dysphonie,
                                aphonie: aphonie || updatedGorge.aphonie,
                                enrouement: enrouement || updatedGorge.enrouement,
                                angine: angine || updatedGorge.angine,
                                pharyngite: pharyngite || updatedGorge.pharyngite,
                                laryngite: laryngite || updatedGorge.laryngite,
                                tracheite: tracheite || updatedGorge.tracheite,
                                adenopathie: adenopathie || updatedGorge.adenopathie,
                                commentaire: commentaire || updatedGorge.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteGorgeSymptome(req, res) {

    }
}

export default GorgeSymptome;
