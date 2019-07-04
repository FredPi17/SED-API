import model from '../models';

const {ManifestationGynecologique} = model;

class ManifGyneco {

    static addManifestionGyneco(req, res) {
        const {
            premierJourRegle, dernierJourRegle, douleurMenstruelle, spotting, regleAbondante, metrorragie, saignementPostCoitale, amenorrhee, secheresseVaginale,
            demangeaisonVulvaire, irritationVulvaire, fissureVulvaire, dyspareunieSuperficielle, dyspareunieProfonde, douleurPelvienne, douleurPelvienneNb,
            aggravationEtatMenstruation, fibrome, kysteOvarien, infectionVaginale, barthonolite, mycose, fausseCouche, commentaire
        } = req.body;
        return ManifestationGynecologique
            .create({
                premierJourRegle,
                dernierJourRegle,
                douleurMenstruelle,
                spotting,
                regleAbondante,
                metrorragie,
                saignementPostCoitale,
                amenorrhee,
                secheresseVaginale,
                demangeaisonVulvaire,
                irritationVulvaire,
                fissureVulvaire,
                dyspareunieSuperficielle,
                dyspareunieProfonde,
                douleurPelvienne,
                douleurPelvienneNb,
                aggravationEtatMenstruation,
                fibrome,
                kysteOvarien,
                infectionVaginale,
                barthonolite,
                mycose,
                fausseCouche,
                commentaire
            })
            .then(addManifestionGyneco => res.status(201).send({
                success: true,
                message: 'Gyneco symptome successfully created',
                addManifestionGyneco
            }))
    }

    static getManifestionGyneco(req, res) {
        return ManifestationGynecologique
            .findAll()
            .then(listeManifestionGyneco => res.status(200).send(listeManifestionGyneco));
    }

    static updateManifestionGyneco(req, res) {

    }

    static deleteManifestionGyneco(req, res) {

    }
}

export default ManifGyneco;
