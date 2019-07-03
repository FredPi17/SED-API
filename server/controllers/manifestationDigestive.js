import model from '../models';

const {ManifestationDigestive} = model;

class ManifDigestive {

    static addManifestionDigestive(req, res) {
        const {
            dysphagie, fausseRoute, rgo, regurgitation, sensationBrulureOesophage, mauvaiseHaleine, eructation, nausees, vomissements, pesanteurGastrique,
            indigestion, gastroParesie, brulureEstomac, ballonements, aerophagie, douleurAbdominale, douleurEpigastrique, crampeIntestinale, estomacGonfle,
            satietePrecoce, perteAppetit, soifPermanente, impossibiliteAlimenter, absenceSatiete, sensationFaimDouloureuse, hypoglycemieReactionnelle, gaz,
            constipation, selleLiquide, spasmeIntestinaux, douleurVesiculaire, imperiositeFecale, amaigrissement, prisePoids, saignementDigestifHaut,
            saignementDigestifBas, criseHemorroide, commentaire,
        } = req.body;
        return ManifestationDigestive
            .create({
                dysphagie,
                fausseRoute,
                rgo,
                regurgitation,
                sensationBrulureOesophage,
                mauvaiseHaleine,
                eructation,
                nausees,
                vomissements,
                pesanteurGastrique,
                indigestion,
                gastroParesie,
                brulureEstomac,
                ballonements,
                aerophagie,
                douleurAbdominale,
                douleurEpigastrique,
                crampeIntestinale,
                estomacGonfle,
                satietePrecoce,
                perteAppetit,
                soifPermanente,
                impossibiliteAlimenter,
                absenceSatiete,
                sensationFaimDouloureuse,
                hypoglycemieReactionnelle,
                gaz,
                constipation,
                selleLiquide,
                spasmeIntestinaux,
                douleurVesiculaire,
                imperiositeFecale,
                amaigrissement,
                prisePoids,
                saignementDigestifHaut,
                saignementDigestifBas,
                criseHemorroide,
                commentaire
            })
            .then(addGorgeSymptome => res.status(201).send({
                success: true,
                message: 'Gorge symptome successfully created',
                addGorgeSymptome
            }))
    }

    static getManifestionDigestive(req, res) {
        return ManifestationDigestive
            .findAll()
            .then(listeManifestationDigestive => res.status(200).send(listeManifestationDigestive));
    }

    static updateManifestionDigestive(req, res) {

    }

    static deleteManifestionDigestive(req, res) {

    }
}

export default ManifDigestive;
