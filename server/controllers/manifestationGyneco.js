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
        const {
            premierJourRegle, dernierJourRegle, douleurMenstruelle, spotting, regleAbondante, metrorragie, saignementPostCoitale, amenorrhee, secheresseVaginale,
            demangeaisonVulvaire, irritationVulvaire, fissureVulvaire, dyspareunieSuperficielle, dyspareunieProfonde, douleurPelvienne, douleurPelvienneNb,
            aggravationEtatMenstruation, fibrome, kysteOvarien, infectionVaginale, barthonolite, mycose, fausseCouche, commentaire
        } = req.body;
        return ManifestationGynecologique
            .findByPk(req.params.id)
            .then((gyneco) => {
                gyneco.update({
                    premierJourRegle: premierJourRegle || gyneco.premierJourRegle,
                    dernierJourRegle: dernierJourRegle || gyneco.dernierJourRegle,
                    douleurMenstruelle: douleurMenstruelle || gyneco.douleurMenstruelle,
                    spotting: spotting || gyneco.spotting,
                    regleAbondante: regleAbondante || gyneco.regleAbondante,
                    metrorragie: metrorragie || gyneco.metrorragie,
                    saignementPostCoitale: saignementPostCoitale || gyneco.saignementPostCoitale,
                    amenorrhee: amenorrhee || gyneco.amenorrhee,
                    secheresseVaginale: secheresseVaginale || gyneco.secheresseVaginale,
                    demangeaisonVulvaire: demangeaisonVulvaire || gyneco.demangeaisonVulvaire,
                    irritationVulvaire: irritationVulvaire || gyneco.irritationVulvaire,
                    fissureVulvaire: fissureVulvaire || gyneco.fissureVulvaire,
                    dyspareunieSuperficielle: dyspareunieSuperficielle || gyneco.dyspareunieSuperficielle,
                    dyspareunieProfonde: dyspareunieProfonde || gyneco.dyspareunieProfonde,
                    douleurPelvienne: douleurPelvienne || gyneco.douleurPelvienne,
                    douleurPelvienneNb: douleurPelvienneNb || gyneco.douleurPelvienneNb,
                    aggravationEtatMenstruation: aggravationEtatMenstruation || gyneco.aggravationEtatMenstruation,
                    fibrome: fibrome || gyneco.fibrome,
                    kysteOvarien: kysteOvarien || gyneco.kysteOvarien,
                    infectionVaginale: infectionVaginale || gyneco.infectionVaginale,
                    barthonolite: barthonolite || gyneco.barthonolite,
                    mycose: mycose || gyneco.mycose,
                    fausseCouche: fausseCouche || gyneco.fausseCouche,
                    commentaire: commentaire || gyneco.commentaire
                })
                    .then((updatedgyneco) => {
                        res.status(200).send({
                            message: 'gyneco updated',
                            data: {
                                premierJourRegle: premierJourRegle || updatedgyneco.premierJourRegle,
                                dernierJourRegle: dernierJourRegle || updatedgyneco.dernierJourRegle,
                                douleurMenstruelle: douleurMenstruelle || updatedgyneco.douleurMenstruelle,
                                spotting: spotting || updatedgyneco.spotting,
                                regleAbondante: regleAbondante || updatedgyneco.regleAbondante,
                                metrorragie: metrorragie || updatedgyneco.metrorragie,
                                saignementPostCoitale: saignementPostCoitale || updatedgyneco.saignementPostCoitale,
                                amenorrhee: amenorrhee || updatedgyneco.amenorrhee,
                                secheresseVaginale: secheresseVaginale || updatedgyneco.secheresseVaginale,
                                demangeaisonVulvaire: demangeaisonVulvaire || updatedgyneco.demangeaisonVulvaire,
                                irritationVulvaire: irritationVulvaire || updatedgyneco.irritationVulvaire,
                                fissureVulvaire: fissureVulvaire || updatedgyneco.fissureVulvaire,
                                dyspareunieSuperficielle: dyspareunieSuperficielle || updatedgyneco.dyspareunieSuperficielle,
                                dyspareunieProfonde: dyspareunieProfonde || updatedgyneco.dyspareunieProfonde,
                                douleurPelvienne: douleurPelvienne || updatedgyneco.douleurPelvienne,
                                douleurPelvienneNb: douleurPelvienneNb || updatedgyneco.douleurPelvienneNb,
                                aggravationEtatMenstruation: aggravationEtatMenstruation || updatedgyneco.aggravationEtatMenstruation,
                                fibrome: fibrome || updatedgyneco.fibrome,
                                kysteOvarien: kysteOvarien || updatedgyneco.kysteOvarien,
                                infectionVaginale: infectionVaginale || updatedgyneco.infectionVaginale,
                                barthonolite: barthonolite || updatedgyneco.barthonolite,
                                mycose: mycose || updatedgyneco.mycose,
                                fausseCouche: fausseCouche || updatedgyneco.fausseCouche,
                                commentaire: commentaire || updatedgyneco.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionGyneco(req, res) {
        return ManifestationGynecologique
            .findByPk(req.params.id)
            .then(gyneco => {
                if (!gyneco) {
                    return res.status(400).send({
                        message: 'Gyneco Not Found',
                    });
                }
                return gyneco
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Gyneco successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifGyneco;
