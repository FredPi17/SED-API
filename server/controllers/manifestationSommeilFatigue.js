import model from '../models';

const {SommeilEtFatigue} = model;

class ManifSommeilFatigue {

    static addManifestionSommeilFatigue(req, res) {
        const {
            fatigue, fatigueNb, asthenie, sommeilNonReparateur, insomnie, hypersomnie, apneeSommeil, ronflement, somnolence, cauchemar, sommeilAgite,
            reveilPrecoceSansRendormissement, sueurNocturne, syndromeJambeSansRepos, reveilFrequent, difficulteEndormissement, nycturie, coupDeFatigue, sieste,
            siesteNb, somnambulisme, terreurNocturne, commentaire
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
                commentaire
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

    static updateManifestionSommeilFatigue(req, res) {

    }

    static deleteManifestionSommeilFatigue(req, res) {

    }
}

export default ManifSommeilFatigue;
