import model from '../models';

const {SommeilEtFatigue} = model;

class ManifSommeilFatigue {

    static addManifestionSommeilFatigue(req, res) {
        const {
            fatigue, fatigueNb, asthenie, sommeilNonReparateur, insomnie, hypersomnie, apneeSommeil, ronflement, somnolence, cauchemar, sommeilAgite,
            reveilPrecoceSansRendormissement, sueurNocturne, syndromeJambeSansRepos, reveilFrequent, difficulteEndormissement, nycturie, coupDeFatigue, sieste,
            siesteNb, somnambulisme, terreurNocturne, commentaire, idUtilisateur
        } = req.body;
        return SommeilEtFatigue
            .create({
                fatigue,
                fatigueNb,
                asthenie,
                sommeilNonReparateur,
                insomnie,
                hypersomnie,
                apneeSommeil,
                ronflement,
                somnolence,
                cauchemar,
                sommeilAgite,
                reveilPrecoceSansRendormissement,
                sueurNocturne,
                syndromeJambeSansRepos,
                reveilFrequent,
                difficulteEndormissement,
                nycturie,
                coupDeFatigue,
                sieste,
                siesteNb,
                somnambulisme,
                terreurNocturne,
                commentaire,
                idUtilisateur
            })
            .then(addManifSommeilFatigue => res.status(201).send({
                success: true,
                message: 'SommeilEtFatigue symptome successfully created',
                addManifSommeilFatigue
            }))
    }

    static getManifestionSommeilFatigue(req, res) {
        return SommeilEtFatigue
            .findAll()
            .then(listeManifestionSommeilFatigue => res.status(200).send(listeManifestionSommeilFatigue));
    }

    static getOneManifestionSommeilFatigueByIdUtilisateur(req, res) {
        return SommeilEtFatigue
            .findOne({where: {idUtilisateur: req.params.id}})
            .then(listeManifestionSommeilFatigue => res.status(200).send(listeManifestionSommeilFatigue));
    }

    static getAllManifestionSommeilFatigueByIdUtilisateur(req, res) {
        return SommeilEtFatigue
            .findAll({where: {idUtilisateur: req.params.id}})
            .then(listeManifestionSommeilFatigue => res.status(200).send(listeManifestionSommeilFatigue));
    }

    static updateManifestionSommeilFatigue(req, res) {
        const {
            fatigue, fatigueNb, asthenie, sommeilNonReparateur, insomnie, hypersomnie, apneeSommeil, ronflement, somnolence, cauchemar, sommeilAgite,
            reveilPrecoceSansRendormissement, sueurNocturne, syndromeJambeSansRepos, reveilFrequent, difficulteEndormissement, nycturie, coupDeFatigue, sieste,
            siesteNb, somnambulisme, terreurNocturne, commentaire
        } = req.body;
        return SommeilEtFatigue
            .findByPk(req.params.id)
            .then((sommeilFatigue) => {
                sommeilFatigue.update({
                    fatigue: fatigue || sommeilFatigue.fatigue,
                    fatigueNb: fatigueNb || sommeilFatigue.fatigueNb,
                    asthenie: asthenie || sommeilFatigue.asthenie,
                    sommeilNonReparateur: sommeilNonReparateur || sommeilFatigue.sommeilNonReparateur,
                    insomnie: insomnie || sommeilFatigue.insomnie,
                    hypersomnie: hypersomnie || sommeilFatigue.hypersomnie,
                    apneeSommeil: apneeSommeil || sommeilFatigue.apneeSommeil,
                    ronflement: ronflement || sommeilFatigue.ronflement,
                    somnolence: somnolence || sommeilFatigue.somnolence,
                    cauchemar: cauchemar || sommeilFatigue.cauchemar,
                    sommeilAgite: sommeilAgite || sommeilFatigue.sommeilAgite,
                    reveilPrecoceSansRendormissement: reveilPrecoceSansRendormissement || sommeilFatigue.reveilPrecoceSansRendormissement,
                    sueurNocturne: sueurNocturne || sommeilFatigue.sueurNocturne,
                    syndromeJambeSansRepos: syndromeJambeSansRepos || sommeilFatigue.syndromeJambeSansRepos,
                    reveilFrequent: reveilFrequent || sommeilFatigue.reveilFrequent,
                    difficulteEndormissement: difficulteEndormissement || sommeilFatigue.difficulteEndormissement,
                    nycturie: nycturie || sommeilFatigue.nycturie,
                    coupDeFatigue: coupDeFatigue || sommeilFatigue.coupDeFatigue,
                    sieste: sieste || sommeilFatigue.sieste,
                    siesteNb: siesteNb || sommeilFatigue.siesteNb,
                    somnambulisme: somnambulisme || sommeilFatigue.somnambulisme,
                    terreurNocturne: terreurNocturne || sommeilFatigue.terreurNocturne,
                    commentaire: commentaire || sommeilFatigue.commentaire
                })
                    .then((updatedsommeilFatigue) => {
                        res.status(200).send({
                            message: 'sommeilFatigue updated',
                            data: {
                                fatigue: fatigue || updatedsommeilFatigue.fatigue,
                                fatigueNb: fatigueNb || updatedsommeilFatigue.fatigueNb,
                                asthenie: asthenie || updatedsommeilFatigue.asthenie,
                                sommeilNonReparateur: sommeilNonReparateur || updatedsommeilFatigue.sommeilNonReparateur,
                                insomnie: insomnie || updatedsommeilFatigue.insomnie,
                                hypersomnie: hypersomnie || updatedsommeilFatigue.hypersomnie,
                                apneeSommeil: apneeSommeil || updatedsommeilFatigue.apneeSommeil,
                                ronflement: ronflement || updatedsommeilFatigue.ronflement,
                                somnolence: somnolence || updatedsommeilFatigue.somnolence,
                                cauchemar: cauchemar || updatedsommeilFatigue.cauchemar,
                                sommeilAgite: sommeilAgite || updatedsommeilFatigue.sommeilAgite,
                                reveilPrecoceSansRendormissement: reveilPrecoceSansRendormissement || updatedsommeilFatigue.reveilPrecoceSansRendormissement,
                                sueurNocturne: sueurNocturne || updatedsommeilFatigue.sueurNocturne,
                                syndromeJambeSansRepos: syndromeJambeSansRepos || updatedsommeilFatigue.syndromeJambeSansRepos,
                                reveilFrequent: reveilFrequent || updatedsommeilFatigue.reveilFrequent,
                                difficulteEndormissement: difficulteEndormissement || updatedsommeilFatigue.difficulteEndormissement,
                                nycturie: nycturie || updatedsommeilFatigue.nycturie,
                                coupDeFatigue: coupDeFatigue || updatedsommeilFatigue.coupDeFatigue,
                                sieste: sieste || updatedsommeilFatigue.sieste,
                                siesteNb: siesteNb || updatedsommeilFatigue.siesteNb,
                                somnambulisme: somnambulisme || updatedsommeilFatigue.somnambulisme,
                                terreurNocturne: terreurNocturne || updatedsommeilFatigue.terreurNocturne,
                                commentaire: commentaire || updatedsommeilFatigue.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
    

    static deleteManifestionSommeilFatigue(req, res) {
        return SommeilEtFatigue
            .findByPk(req.params.id)
            .then(sommeilFatigue => {
                if (!sommeilFatigue) {
                    return res.status(400).send({
                        message: 'Sommeil et Fatigue Not Found',
                    });
                }
                return sommeilFatigue
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Sommeil et Fatigue successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifSommeilFatigue;
