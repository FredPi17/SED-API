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

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the SED API!',
    }));


    // Routes for gorge
    app.post('/api/gorge', GorgeSymptome.addGorgeSymptome); // API route to add a gorgeSymptome
    app.get('/api/gorge', GorgeSymptome.getGorgeSymptomes); // API route to get all gorgeSymptomes
    app.put('/api/gorge', GorgeSymptome.updateGorgeSymptome); // API route to update a gorgeSymptome
    app.delete('/api/gorge/:id', GorgeSymptome.deleteGorgeSymptome); // API route to delete a gorgeSymptome

    // Routes for oreille
    app.post('/api/oreille', OreilleSymptome.addOreilleSymptome); // API route to add a oreille
    app.get('/api/oreille', OreilleSymptome.getOreilleSymptomes); // API route to get all oreille
    app.put('/api/oreille', OreilleSymptome.updateOreilleSymptome); // API route to update a oreille
    app.delete('/api/oreille/:id', OreilleSymptome.deleteOreilleSymptome); // API route to delete a oreille

    // Routes for manifestion digestive
    app.post('/api/manifestionDigestive', ManifDigestive.addManifestionDigestive); // API route to add a manifestionDigestive
    app.get('/api/manifestionDigestive', ManifDigestive.getManifestionDigestive); // API route to get all manifestionDigestive
    app.put('/api/manifestionDigestive', ManifDigestive.updateManifestionDigestive); // API route to update a manifestionDigestive
    app.delete('/api/manifestionDigestive/:id', ManifDigestive.deleteManifestionDigestive); // API route to delete a manifestionDigestive

    // Routes for manifestion cardio vasculaire
    app.post('/api/manifestionCardio', ManifCardio.addManifestionCardio); // API route to add a manifestionCardio
    app.get('/api/manifestionCardio', ManifCardio.getManifestionCardio); // API route to get all manifestionCardio
    app.put('/api/manifestionCardio', ManifCardio.updateManifestionCardio); // API route to update a manifestionCardio
    app.delete('/api/manifestionCardio/:id', ManifCardio.deleteManifestionCardio); // API route to delete a manifestionCardio

    // Routes for manifestion respiratoire
    app.post('/api/manifestionRespi', ManifRespi.addManifestionRespi); // API route to add a manifestionRespi
    app.get('/api/manifestionRespi', ManifRespi.getManifestionRespi); // API route to get all manifestionRespi
    app.put('/api/manifestionRespi', ManifRespi.updateManifestionRespi); // API route to update a manifestionRespi
    app.delete('/api/manifestionRespi/:id', ManifRespi.deleteManifestionRespi); // API route to delete a manifestionRespi

    // Routes for manifestion orl
    app.post('/api/manifestionOrl', ManifOrl.addManifestionOrl); // API route to add a manifestionOrl
    app.get('/api/manifestionOrl', ManifOrl.getManifestionOrl); // API route to get all manifestionOrl
    app.put('/api/manifestionOrl', ManifOrl.updateManifestionOrl); // API route to update a manifestionOrl
    app.delete('/api/manifestionOrl/:id', ManifOrl.deleteManifestionOrl); // API route to delete a manifestionOrl

    // Routes for manifestion bucco-dentaire
    app.post('/api/manifestionBuccoDent', ManifBuccoDent.addManifestionBuccoDent); // API route to add a bucco-dentaire
    app.get('/api/manifestionBuccoDent', ManifBuccoDent.getManifestionBuccoDent); // API route to get all bucco-dentaire
    app.put('/api/manifestionBuccoDent', ManifBuccoDent.updateManifestionBuccoDent); // API route to update a bucco-dentaire
    app.delete('/api/manifestionBuccoDent/:id', ManifBuccoDent.deleteManifestionBuccoDent); // API route to delete a bucco-dentaire

    // Routes for manifestion neuro
    app.post('/api/manifestionNeuro', ManifNeuro.addManifestionNeuro); // API route to add a neuro
    app.get('/api/manifestionNeuro', ManifNeuro.getManifestionNeuro); // API route to get all neuro
    app.put('/api/manifestionNeuro', ManifNeuro.updateManifestionNeuro); // API route to update a neuro
    app.delete('/api/manifestionNeuro/:id', ManifNeuro.deleteManifestionNeuro); // API route to delete a neuro

    // Routes for manifestion neuro
    app.post('/api/manifestionUrinaire', ManifUrinaire.addManifestionUrinaire); // API route to add a urinaire
    app.get('/api/manifestionUrinaire', ManifUrinaire.getManifestionUrinaire); // API route to get all urinaire
    app.put('/api/manifestionUrinaire', ManifUrinaire.updateManifestionUrinaire); // API route to update a urinaire
    app.delete('/api/manifestionUrinaire/:id', ManifUrinaire.deleteManifestionUrinaire); // API route to delete a urinaire

    // Routes for manifestion osteoArticulaire
    app.post('/api/manifestionOsteoArticulaire', ManifOsteoArticulaire.addManifestionOsteoArticulaire); // API route to add a osteoArticulaire
    app.get('/api/manifestionOsteoArticulaire', ManifOsteoArticulaire.getManifestionOsteoArticulaire); // API route to get all osteoArticulaire
    app.put('/api/manifestionOsteoArticulaire', ManifOsteoArticulaire.updateManifestionOsteoArticulaire); // API route to update a osteoArticulaire
    app.delete('/api/manifestionOsteoArticulaire/:id', ManifOsteoArticulaire.deleteManifestionOsteoArticulaire); // API route to delete a osteoArticulaire

    // Routes for manifestion sommeilFatigue
    app.post('/api/manifestionSommeilFatigue', ManifSommeilFatigue.addManifestionSommeilFatigue); // API route to add a sommeilFatigue
    app.get('/api/manifestionSommeilFatigue', ManifSommeilFatigue.getManifestionSommeilFatigue); // API route to get all sommeilFatigue
    app.put('/api/manifestionSommeilFatigue', ManifSommeilFatigue.updateManifestionSommeilFatigue); // API route to update a sommeilFatigue
    app.delete('/api/manifestionSommeilFatigue/:id', ManifSommeilFatigue.deleteManifestionSommeilFatigue); // API route to delete a sommeilFatigue

    // Routes for manifestion psychologique
    app.post('/api/manifestionPsychologique', ManifPsychologique.addManifestionPsychologique); // API route to add a psychologique
    app.get('/api/manifestionPsychologique', ManifPsychologique.getManifestionPsychologique); // API route to get all psychologique
    app.put('/api/manifestionPsychologique', ManifPsychologique.updateManifestionPsychologique); // API route to update a psychologique
    app.delete('/api/manifestionPsychologique/:id', ManifPsychologique.deleteManifestionPsychologique); // API route to delete a psychologique

    // Routes for manifestion cognitive
    app.post('/api/manifestionCognitive', ManifCognitive.addManifestionCognitive); // API route to add a cognitive
    app.get('/api/manifestionCognitive', ManifCognitive.getManifestionCognitive); // API route to get all cognitive
    app.put('/api/manifestionCognitive', ManifCognitive.updateManifestionCognitive); // API route to update a cognitive
    app.delete('/api/manifestionCognitive/:id', ManifCognitive.deleteManifestionCognitive); // API route to delete a cognitive

    // Routes for manifestion musculaire
    app.post('/api/manifestionMusculaire', ManifMusculaire.addManifestionMusculaire); // API route to add a musculaire
    app.get('/api/manifestionMusculaire', ManifMusculaire.getManifestionMusculaire); // API route to get all musculaire
    app.put('/api/manifestionMusculaire', ManifMusculaire.updateManifestionMusculaire); // API route to update a musculaire
    app.delete('/api/manifestionMusculaire/:id', ManifMusculaire.deleteManifestionMusculaire); // API route to delete a musculaire

    // Routes for manifestion ophtalmo
    app.post('/api/manifestionOphtalmo', ManifOphtalmo.addManifestionOphtalmo); // API route to add a ophtalmo
    app.get('/api/manifestionOphtalmo', ManifOphtalmo.getManifestionOphtalmo); // API route to get all ophtalmo
    app.put('/api/manifestionOphtalmo', ManifOphtalmo.updateManifestionOphtalmo); // API route to update a ophtalmo
    app.delete('/api/manifestionOphtalmo/:id', ManifOphtalmo.deleteManifestionOphtalmo); // API route to delete a ophtalmo

    // Routes for manifestion cutanee
    app.post('/api/manifestionCutanee', ManifCutanee.addManifestionCutanee); // API route to add a cutanee
    app.get('/api/manifestionCutanee', ManifCutanee.getManifestionCutanee); // API route to get all cutanee
    app.put('/api/manifestionCutanee', ManifCutanee.updateManifestionCutanee); // API route to update a cutanee
    app.delete('/api/manifestionCutanee/:id', ManifCutanee.deleteManifestionCutanee); // API route to delete a cutanee

    // Routes for manifestion gyneco
    app.post('/api/manifestionGyneco', ManifGyneco.addManifestionGyneco); // API route to add a gyneco
    app.get('/api/manifestionGyneco', ManifGyneco.getManifestionGyneco); // API route to get all gyneco
    app.put('/api/manifestionGyneco', ManifGyneco.updateManifestionGyneco); // API route to update a gyneco
    app.delete('/api/manifestionGyneco/:id', ManifGyneco.deleteManifestionGyneco); // API route to delete a gyneco


};
