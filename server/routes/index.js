import GorgeSymptome from '../controllers/gorge';
import OreilleSymptome from '../controllers/oreille';
import ManifDigestive from '../controllers/manifestationDigestive';
import ManifCardio from "../controllers/manifestationCardioVasculaire";
import ManifRespi from "../controllers/manifestationRespiratoire";
import ManifOrl from "../controllers/manifestationOrl";
import ManifBuccoDent from "../controllers/manifestationBuccoDent";
import ManifUrinaire from "../controllers/manifestationUrinaire";
import ManifNeuro from "../controllers/manifestationNeuro";
import ManifOsteoArticulaire from "../controllers/manifestationOsteoArticulaire";
import ManifSommeilFatigue from "../controllers/manifestationSommeilFatigue";
import ManifPsychologique from "../controllers/manifPsychologique";
import ManifCognitive from "../controllers/manifestationCognitive";
import ManifMusculaire from "../controllers/manifestationMusculaire";
import ManifOphtalmo from "../controllers/manifestationOphtalmologique";
import ManifCutanee from "../controllers/manifestationCutanee";
import ManifGyneco from "../controllers/manifestationGyneco";
import Repercu from "../controllers/repercussions";
import Traitement from "../controllers/Traitement";

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the SED API!',
    }));

    // Routes for gorge
    app.post('/api/gorge', GorgeSymptome.addGorgeSymptome); // API route to add a gorgeSymptome
    app.get('/api/gorge', GorgeSymptome.getGorgeSymptomes); // API route to get all gorgeSymptomes
    app.get('/api/gorge/:id', GorgeSymptome.getOneGorgeSymptomesByIdUtilisateur); // API route to get one gorgeSymptomes by idUtilisateur
    app.get('/api/gorge/all/:id', GorgeSymptome.getAllGorgeSymptomesByIdUtilisateur); // API route to get all gorgeSymptomes by idUtilisateur
    app.put('/api/gorge/:id', GorgeSymptome.updateGorgeSymptome); // API route to update a gorgeSymptome
    app.delete('/api/gorge/:id', GorgeSymptome.deleteGorgeSymptome); // API route to delete a gorgeSymptome

    // Routes for oreille
    app.post('/api/oreille', OreilleSymptome.addOreilleSymptome); // API route to add a oreille
    app.get('/api/oreille', OreilleSymptome.getOreilleSymptomes); // API route to get all oreille
    app.get('/api/oreille/:id', OreilleSymptome.getOneOreilleSymptomesByIdUtilisateur); // API route to get one oreille by idUtilisateur
    app.get('/api/oreille/all/:id', OreilleSymptome.getAllOreilleSymptomesByIdUtilisateur); // API route to get all oreille by idUtilisateur
    app.put('/api/oreille/:id', OreilleSymptome.updateOreilleSymptome); // API route to update a oreille
    app.delete('/api/oreille/:id', OreilleSymptome.deleteOreilleSymptome); // API route to delete a oreille

    // Routes for manifestion digestive
    app.post('/api/manifestationDigestive', ManifDigestive.addManifestionDigestive); // API route to add a manifestionDigestive
    app.get('/api/manifestationDigestive', ManifDigestive.getManifestionDigestive); // API route to get all manifestionDigestive
    app.get('/api/manifestationDigestive/:id', ManifDigestive.getOneManifestionDigestiveByIdUtilisateur); // API route to get on manifestionDigestive by idUtilisateur
    app.get('/api/manifestationDigestive/all/:id', ManifDigestive.getAllManifestionDigestiveByIdUtilisateur); // API route to get all manifestionDigestive by idUtilisateur
    app.put('/api/manifestationDigestive/:id', ManifDigestive.updateManifestionDigestive); // API route to update a manifestionDigestive
    app.delete('/api/manifestationDigestive/:id', ManifDigestive.deleteManifestionDigestive); // API route to delete a manifestionDigestive

    // Routes for manifestion cardio vasculaire
    app.post('/api/manifestationCardio', ManifCardio.addManifestionCardio); // API route to add a manifestionCardio
    app.get('/api/manifestationCardio', ManifCardio.getManifestionCardio); // API route to get all manifestionCardio
    app.get('/api/manifestationCardio/:id', ManifCardio.getOneManifestionCardioByIdUtilisateur); // API route to get one manifestionCardio by idUtilisateur
    app.get('/api/manifestationCardio/all/:id', ManifCardio.getAllManifestionCardioByIdUtilisateur); // API route to get all manifestionCardio by idUtilisateur
    app.put('/api/manifestationCardio/:id', ManifCardio.updateManifestionCardio); // API route to update a manifestionCardio
    app.delete('/api/manifestationCardio/:id', ManifCardio.deleteManifestionCardio); // API route to delete a manifestionCardio

    // Routes for manifestion respiratoire
    app.post('/api/manifestationRespi', ManifRespi.addManifestionRespi); // API route to add a manifestionRespi
    app.get('/api/manifestationRespi', ManifRespi.getManifestionRespi); // API route to get all manifestionRespi
    app.get('/api/manifestationRespi/:id', ManifRespi.getOneManifestionRespiByIdUtilisateur); // API route to get one manifestionRespi by idUtilisateur
    app.get('/api/manifestationRespi/all/:id', ManifRespi.getAllManifestionRespiByIdUtilisateur); // API route to get all manifestionRespi by idUtilisateur
    app.put('/api/manifestationRespi/:id', ManifRespi.updateManifestionRespi); // API route to update a manifestionRespi
    app.delete('/api/manifestationRespi/:id', ManifRespi.deleteManifestionRespi); // API route to delete a manifestionRespi

    // Routes for manifestion orl
    app.post('/api/manifestationOrl', ManifOrl.addManifestionOrl); // API route to add a manifestionOrl
    app.get('/api/manifestationOrl', ManifOrl.getManifestionOrl); // API route to get all manifestionOrl
    app.get('/api/manifestationOrl/:id', ManifOrl.getOneManifestionOrlByIdUtilisateur); // API route to get one manifestionOrl by idUtilisateur
    app.get('/api/manifestationOrl/all/:id', ManifOrl.getAllManifestionOrlByIdUtilisateur); // API route to get all manifestionOrl by idUtilisateur
    app.put('/api/manifestationOrl/:id', ManifOrl.updateManifestionOrl); // API route to update a manifestionOrl
    app.delete('/api/manifestationOrl/:id', ManifOrl.deleteManifestionOrl); // API route to delete a manifestionOrl

    // Routes for manifestion bucco-dentaire
    app.post('/api/manifestationBuccoDent', ManifBuccoDent.addManifestionBuccoDent); // API route to add a bucco-dentaire
    app.get('/api/manifestationBuccoDent', ManifBuccoDent.getManifestionBuccoDent); // API route to get all bucco-dentaire
    app.get('/api/manifestationBuccoDent/:id', ManifBuccoDent.getOneManifestionBuccoDentByIdUtilisateur); // API route to get one bucco-dentaire by idUtilisateur
    app.get('/api/manifestationBuccoDent/all/:id', ManifBuccoDent.getAllManifestionBuccoDentByIdUtilisateur); // API route to get all bucco-dentaire by idUtilisateur
    app.put('/api/manifestationBuccoDent/:id', ManifBuccoDent.updateManifestionBuccoDent); // API route to update a bucco-dentaire
    app.delete('/api/manifestationBuccoDent/:id', ManifBuccoDent.deleteManifestionBuccoDent); // API route to delete a bucco-dentaire

    // Routes for manifestion neuro
    app.post('/api/manifestationNeuro', ManifNeuro.addManifestionNeuro); // API route to add a neuro
    app.get('/api/manifestationNeuro', ManifNeuro.getManifestionNeuro); // API route to get all neuro
    app.get('/api/manifestationNeuro/:id', ManifNeuro.getOneManifestionNeuroByIdUtilisateur); // API route to get one neuro by idUtilisateur
    app.get('/api/manifestationNeuro/all/:id', ManifNeuro.getAllManifestionNeuroByIdUtilisateur); // API route to get all neuro by idUtilisateur
    app.put('/api/manifestationNeuro/:id', ManifNeuro.updateManifestionNeuro); // API route to update a neuro
    app.delete('/api/manifestationNeuro/:id', ManifNeuro.deleteManifestionNeuro); // API route to delete a neuro

    // Routes for manifestion urinaire
    app.post('/api/manifestationUrinaire', ManifUrinaire.addManifestionUrinaire); // API route to add a urinaire
    app.get('/api/manifestationUrinaire', ManifUrinaire.getManifestionUrinaire); // API route to get all urinaire
    app.get('/api/manifestationUrinaire/:id', ManifUrinaire.getOneManifestionUrinaireByIdUtilisateur); // API route to get one urinaire by idUtilisateur
    app.get('/api/manifestationUrinaire/all/:id', ManifUrinaire.getAllManifestionUrinaireByIdUtilisateur); // API route to get all urinaire by idUtilisateur
    app.put('/api/manifestationUrinaire/:id', ManifUrinaire.updateManifestionUrinaire); // API route to update a urinaire
    app.delete('/api/manifestationUrinaire/:id', ManifUrinaire.deleteManifestionUrinaire); // API route to delete a urinaire

    // Routes for manifestion osteoArticulaire
    app.post('/api/manifestationOsteoArticulaire', ManifOsteoArticulaire.addManifestionOsteoArticulaire); // API route to add a osteoArticulaire
    app.get('/api/manifestationOsteoArticulaire', ManifOsteoArticulaire.getManifestionOsteoArticulaire); // API route to get all osteoArticulaire
    app.get('/api/manifestationOsteoArticulaire/:id', ManifOsteoArticulaire.getOneManifestionOsteoArticulaireByIdUtilisateur); // API route to get one osteoArticulaire by idUtilisateur
    app.get('/api/manifestationOsteoArticulaire/all/:id', ManifOsteoArticulaire.getAllManifestionOsteoArticulaireByIdUtilisateur); // API route to get all osteoArticulaire by idUtilisateur

    app.put('/api/manifestationOsteoArticulaire/:id', ManifOsteoArticulaire.updateManifestionOsteoArticulaire); // API route to update a osteoArticulaire
    app.delete('/api/manifestationOsteoArticulaire/:id', ManifOsteoArticulaire.deleteManifestionOsteoArticulaire); // API route to delete a osteoArticulaire

    // Routes for manifestion sommeilFatigue
    app.post('/api/manifestationSommeilFatigue', ManifSommeilFatigue.addManifestionSommeilFatigue); // API route to add a sommeilFatigue
    app.get('/api/manifestationSommeilFatigue', ManifSommeilFatigue.getManifestionSommeilFatigue); // API route to get all sommeilFatigue
    app.get('/api/manifestationSommeilFatigue/:id', ManifSommeilFatigue.getOneManifestionSommeilFatigueByIdUtilisateur); // API route to get one sommeilFatigue by idUtilisateur
    app.get('/api/manifestationSommeilFatigue/all/:id', ManifSommeilFatigue.getAllManifestionSommeilFatigueByIdUtilisateur); // API route to get all sommeilFatigue by idUtilisateur
    app.put('/api/manifestationSommeilFatigue/:id', ManifSommeilFatigue.updateManifestionSommeilFatigue); // API route to update a sommeilFatigue
    app.delete('/api/manifestationSommeilFatigue/:id', ManifSommeilFatigue.deleteManifestionSommeilFatigue); // API route to delete a sommeilFatigue

    // Routes for manifestion psychologique
    app.post('/api/manifestationPsychologique', ManifPsychologique.addManifestionPsychologique); // API route to add a psychologique
    app.get('/api/manifestationPsychologique', ManifPsychologique.getManifestionPsychologique); // API route to get all psychologique
    app.get('/api/manifestationPsychologique/:id', ManifPsychologique.getOneManifestionPsychologiqueByIdUtilisateur); // API route to get one psychologique by idUtilisateur
    app.get('/api/manifestationPsychologique/all/:id', ManifPsychologique.getAllManifestionPsychologiqueByIdUtilisateur); // API route to get all psychologique by idUtilisateur
    app.put('/api/manifestationPsychologique/:id', ManifPsychologique.updateManifestionPsychologique); // API route to update a psychologique
    app.delete('/api/manifestationPsychologique/:id', ManifPsychologique.deleteManifestionPsychologique); // API route to delete a psychologique

    // Routes for manifestion cognitive
    app.post('/api/manifestationCognitive', ManifCognitive.addManifestionCognitive); // API route to add a cognitive
    app.get('/api/manifestationCognitive', ManifCognitive.getManifestionCognitive); // API route to get all cognitive
    app.get('/api/manifestationCognitive/:id', ManifCognitive.getOneManifestionCognitiveByIdUtilisateur); // API route to get one cognitive by idUtilisateur
    app.get('/api/manifestationCognitive/all/:id', ManifCognitive.getAllManifestionCognitiveByIdUtilisateur); // API route to get all cognitive by idUtilisateur
    app.put('/api/manifestationCognitive/:id', ManifCognitive.updateManifestionCognitive); // API route to update a cognitive
    app.delete('/api/manifestationCognitive/:id', ManifCognitive.deleteManifestionCognitive); // API route to delete a cognitive

    // Routes for manifestion musculaire
    app.post('/api/manifestationMusculaire', ManifMusculaire.addManifestionMusculaire); // API route to add a musculaire
    app.get('/api/manifestationMusculaire', ManifMusculaire.getManifestionMusculaire); // API route to get all musculaire
    app.get('/api/manifestationMusculaire/:id', ManifMusculaire.getOneManifestionMusculaireByIdUtilisateur); // API route to get one musculaire by idUtilisateur
    app.get('/api/manifestationMusculaire/all/:id', ManifMusculaire.getAllManifestionMusculaireByIdUtilisateur); // API route to get all musculaire by idUtilisateur
    app.put('/api/manifestationMusculaire/:id', ManifMusculaire.updateManifestionMusculaire); // API route to update a musculaire
    app.delete('/api/manifestationMusculaire/:id', ManifMusculaire.deleteManifestionMusculaire); // API route to delete a musculaire

    // Routes for manifestion ophtalmo
    app.post('/api/manifestationOphtalmo', ManifOphtalmo.addManifestionOphtalmo); // API route to add a ophtalmo
    app.get('/api/manifestationOphtalmo', ManifOphtalmo.getManifestionOphtalmo); // API route to get all ophtalmo
    app.get('/api/manifestationOphtalmo/:id', ManifOphtalmo.getOneManifestionOphtalmoByIdUtilisateur); // API route to get one ophtalmo by idUtilisateur
    app.get('/api/manifestationOphtalmo/all/:id', ManifOphtalmo.getAllManifestionOphtalmoByIdUtilisateur); // API route to get all ophtalmo by idUtilisateur
    app.put('/api/manifestationOphtalmo/:id', ManifOphtalmo.updateManifestionOphtalmo); // API route to update a ophtalmo
    app.delete('/api/manifestationOphtalmo/:id', ManifOphtalmo.deleteManifestionOphtalmo); // API route to delete a ophtalmo

    // Routes for manifestion cutanee
    app.post('/api/manifestationCutanee', ManifCutanee.addManifestionCutanee); // API route to add a cutanee
    app.get('/api/manifestationCutanee', ManifCutanee.getManifestionCutanee); // API route to get all cutanee
    app.get('/api/manifestationCutanee/:id', ManifCutanee.getOneManifestionCutaneeByIdUtilisateur); // API route to get one cutanee by idUtilisateur
    app.get('/api/manifestationCutanee/all/:id', ManifCutanee.getAllManifestionCutaneeByIdUtilisateur); // API route to get all cutanee by idUtilisateur
    app.put('/api/manifestationCutanee/:id', ManifCutanee.updateManifestionCutanee); // API route to update a cutanee
    app.delete('/api/manifestationCutanee/:id', ManifCutanee.deleteManifestionCutanee); // API route to delete a cutanee

    // Routes for manifestion gyneco
    app.post('/api/manifestationGyneco', ManifGyneco.addManifestionGyneco); // API route to add a gyneco
    app.get('/api/manifestationGyneco', ManifGyneco.getManifestionGyneco); // API route to get all gyneco
    app.get('/api/manifestationGyneco/:id', ManifGyneco.getOneManifestionGynecoByIdUtilisateur); // API route to get one gyneco by idUtilisateur
    app.get('/api/manifestationGyneco/all/:id', ManifGyneco.getAllManifestionGynecoByIdUtilisateur); // API route to get all gyneco by idUtilisateur
    app.put('/api/manifestationGyneco/:id', ManifGyneco.updateManifestionGyneco); // API route to update a gyneco
    app.delete('/api/manifestationGyneco/:id', ManifGyneco.deleteManifestionGyneco); // API route to delete a gyneco

    // Routes for repercussions
    app.post('/api/repercussions', Repercu.addRepercussion); // API route to add a repercussions
    app.get('/api/repercussions', Repercu.getRepercussion); // API route to get all repercussions
    app.get('/api/repercussions/:id', Repercu.getOneRepercussionByIdUtilisateur); // API route to get one repercussions by idUtilisateur
    app.get('/api/repercussions/all/:id', Repercu.getAllRepercussionByIdUtilisateur); // API route to get all repercussions by idUtilisateur
    app.put('/api/repercussions/:id', Repercu.updateRepercussion); // API route to update a repercussions
    app.delete('/api/repercussions/:id', Repercu.deleteRepercussion); // API route to delete a repercussions

    // Routes for traitements
    app.post('/api/traitements', Traitement.addTraitement); // API route to add a traitements
    app.get('/api/traitements', Traitement.getTraitement); // API route to get all traitements
    app.get('/api/traitements/:id', Traitement.getOneTraitementByIdUtilisateur); // API route to get one traitements by idUtilisateur
    app.get('/api/traitements/all/:id', Traitement.getAllTraitementByIdUtilisateur); // API route to get all traitements by idUtilisateur
    app.put('/api/traitements/:id', Traitement.updateTraitement); // API route to update a traitements
    app.delete('/api/traitements/:id', Traitement.deleteTraitement); // API route to delete a traitements

};
