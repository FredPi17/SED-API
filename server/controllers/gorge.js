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

    }

    static deleteGorgeSymptome(req, res) {

    }
}

export default GorgeSymptome;
