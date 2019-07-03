import GorgeSymptome from '../controllers/gorge';
import OreilleSymptome from '../controllers/oreille';
import ManifDigestive from '../controllers/manifestationDigestive';
import ManifCardio from "../controllers/manifestationCardioVasculaire";
import ManifRespi from "../controllers/manifestationRespiratoire";
import ManifOrl from "../controllers/manifestationOrl";

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


};
