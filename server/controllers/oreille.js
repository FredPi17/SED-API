import model from '../models';

const {Oreille} = model;

class OreilleSymptome {

    static addOreilleSymptome(req, res) {
        const {mauxGorge, gorgeQuiGratte, gorgeIrritee, douleurAigueGorge, deglutitionDouloureuse, troubleGout, raclementGorge, ecoulementArriereGorge, dysphonie, aphonie, enrouement, angine, pharyngite, laryngite, tracheite, adenopathie, commentaire} = req.body;
        return Oreille
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

    static getOreilleSymptomes(req, res) {
        return Oreille
            .findAll()
            .then(listeOreilleSymptome => res.status(200).send(listeOreilleSymptome));
    }

    static updateOreilleSymptome(req, res) {

    }

    static deleteOreilleSymptome(req, res) {

    }
}

export default OreilleSymptome;
