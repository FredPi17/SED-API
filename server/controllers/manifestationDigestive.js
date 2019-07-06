import model from '../models';

const {ManifestionDigestive} = model;

class ManifDigestive {

    static addManifestionDigestive(req, res) {
        const {
            dysphagie, fausseRoute, rgo, regurgitation, sensationBrulureOesophage, mauvaiseHaleine, eructation, nausees, vomissements, pesanteurGastrique,
            indigestion, gastroParesie, brulureEstomac, ballonements, aerophagie, douleurAbdominale, douleurEpigastrique, crampeIntestinale, estomacGonfle,
            satietePrecoce, perteAppetit, soifPermanente, impossibiliteAlimenter, absenceSatiete, sensationFaimDouloureuse, hypoglycemieReactionnelle, gaz,
            constipation, selleLiquide, spasmeIntestinaux, douleurVesiculaire, imperiositeFecale, amaigrissement, prisePoids, saignementDigestifHaut,
            saignementDigestifBas, criseHemorroide, commentaire, idUtilisateur
        } = req.body;
        return ManifestionDigestive
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
                commentaire,
                idUtilisateur
            })
            .then(adddigestiveSymptome => res.status(201).send({
                success: true,
                message: 'digestive symptome successfully created',
                adddigestiveSymptome
            }))
    }

    static getManifestionDigestive(req, res) {
        return ManifestionDigestive
            .findAll()
            .then(listeManifestationDigestive => res.status(200).send(listeManifestationDigestive));
    }

    static getOneManifestionDigestiveByIdUtilisateur(req, res) {
        return ManifestionDigestive
            .findOne({where: {idUtilisateur: req.params.id}})
            .then(listeManifestationDigestive => res.status(200).send(listeManifestationDigestive));
    }

    static getAllManifestionDigestiveByIdUtilisateur(req, res) {
        return ManifestionDigestive
            .findAll({where: {idUtilisateur: req.params.id}})
            .then(listeManifestationDigestive => res.status(200).send(listeManifestationDigestive));
    }

    static updateManifestionDigestive(req, res) {
        const {
            dysphagie, fausseRoute, rgo, regurgitation, sensationBrulureOesophage, mauvaiseHaleine, eructation, nausees, vomissements, pesanteurGastrique,
            indigestion, gastroParesie, brulureEstomac, ballonements, aerophagie, douleurAbdominale, douleurEpigastrique, crampeIntestinale, estomacGonfle,
            satietePrecoce, perteAppetit, soifPermanente, impossibiliteAlimenter, absenceSatiete, sensationFaimDouloureuse, hypoglycemieReactionnelle, gaz,
            constipation, selleLiquide, spasmeIntestinaux, douleurVesiculaire, imperiositeFecale, amaigrissement, prisePoids, saignementDigestifHaut,
            saignementDigestifBas, criseHemorroide, commentaire,
        } = req.body;
        return ManifestionDigestive
            .findByPk(req.params.id)
            .then((digestive) => {
                digestive.update({
                    dysphagie: dysphagie || digestive.dysphagie,
                    fausseRoute: fausseRoute || digestive.fausseRoute,
                    rgo: rgo || digestive.rgo,
                    regurgitation: regurgitation || digestive.regurgitation,
                    sensationBrulureOesophage: sensationBrulureOesophage || digestive.sensationBrulureOesophage,
                    mauvaiseHaleine: mauvaiseHaleine || digestive.mauvaiseHaleine,
                    eructation: eructation || digestive.eructation,
                    nausees: nausees || digestive.nausees,
                    vomissements: vomissements || digestive.vomissements,
                    pesanteurGastrique: pesanteurGastrique || digestive.pesanteurGastrique,
                    indigestion: indigestion || digestive.indigestion,
                    gastroParesie: gastroParesie || digestive.gastroParesie,
                    brulureEstomac: brulureEstomac || digestive.brulureEstomac,
                    ballonements: ballonements || digestive.ballonements,
                    aerophagie: aerophagie || digestive.aerophagie,
                    douleurAbdominale: douleurAbdominale || digestive.douleurAbdominale,
                    douleurEpigastrique: douleurEpigastrique || digestive.douleurEpigastrique,
                    crampeIntestinale: crampeIntestinale || digestive.crampeIntestinale,
                    estomacGonfle: estomacGonfle || digestive.estomacGonfle,
                    satietePrecoce: satietePrecoce || digestive.satietePrecoce,
                    perteAppetit: perteAppetit || digestive.perteAppetit,
                    soifPermanente: soifPermanente || digestive.soifPermanente,
                    impossibiliteAlimenter: impossibiliteAlimenter || digestive.impossibiliteAlimenter,
                    absenceSatiete: absenceSatiete || digestive.absenceSatiete,
                    sensationFaimDouloureuse: sensationFaimDouloureuse || digestive.sensationFaimDouloureuse,
                    hypoglycemieReactionnelle: hypoglycemieReactionnelle || digestive.hypoglycemieReactionnelle,
                    gaz: gaz || digestive.gaz,
                    constipation: constipation || digestive.constipation,
                    selleLiquide: selleLiquide || digestive.selleLiquide,
                    spasmeIntestinaux: spasmeIntestinaux || digestive.spasmeIntestinaux,
                    douleurVesiculaire: douleurVesiculaire || digestive.douleurVesiculaire,
                    imperiositeFecale: imperiositeFecale || digestive.imperiositeFecale,
                    amaigrissement: amaigrissement || digestive.amaigrissement,
                    prisePoids: prisePoids || digestive.prisePoids,
                    saignementDigestifHaut: saignementDigestifHaut || digestive.saignementDigestifHaut,
                    saignementDigestifBas: saignementDigestifBas || digestive.saignementDigestifBas,
                    criseHemorroide: criseHemorroide || digestive.criseHemorroide,
                    commentaire: commentaire || digestive.commentaire
                })
                    .then((updateddigestive) => {
                        res.status(200).send({
                            message: 'digestive updated',
                            data: {
                                dysphagie: dysphagie || updateddigestive.dysphagie,
                                fausseRoute: fausseRoute || updateddigestive.fausseRoute,
                                rgo: rgo || updateddigestive.rgo,
                                regurgitation: regurgitation || updateddigestive.regurgitation,
                                sensationBrulureOesophage: sensationBrulureOesophage || updateddigestive.sensationBrulureOesophage,
                                mauvaiseHaleine: mauvaiseHaleine || updateddigestive.mauvaiseHaleine,
                                eructation: eructation || updateddigestive.eructation,
                                nausees: nausees || updateddigestive.nausees,
                                vomissements: vomissements || updateddigestive.vomissements,
                                pesanteurGastrique: pesanteurGastrique || updateddigestive.pesanteurGastrique,
                                indigestion: indigestion || updateddigestive.indigestion,
                                gastroParesie: gastroParesie || updateddigestive.gastroParesie,
                                brulureEstomac: brulureEstomac || updateddigestive.brulureEstomac,
                                ballonements: ballonements || updateddigestive.ballonements,
                                aerophagie: aerophagie || updateddigestive.aerophagie,
                                douleurAbdominale: douleurAbdominale || updateddigestive.douleurAbdominale,
                                douleurEpigastrique: douleurEpigastrique || updateddigestive.douleurEpigastrique,
                                crampeIntestinale: crampeIntestinale || updateddigestive.crampeIntestinale,
                                estomacGonfle: estomacGonfle || updateddigestive.estomacGonfle,
                                satietePrecoce: satietePrecoce || updateddigestive.satietePrecoce,
                                perteAppetit: perteAppetit || updateddigestive.perteAppetit,
                                soifPermanente: soifPermanente || updateddigestive.soifPermanente,
                                impossibiliteAlimenter: impossibiliteAlimenter || updateddigestive.impossibiliteAlimenter,
                                absenceSatiete: absenceSatiete || updateddigestive.absenceSatiete,
                                sensationFaimDouloureuse: sensationFaimDouloureuse || updateddigestive.sensationFaimDouloureuse,
                                hypoglycemieReactionnelle: hypoglycemieReactionnelle || updateddigestive.hypoglycemieReactionnelle,
                                gaz: gaz || updateddigestive.gaz,
                                constipation: constipation || updateddigestive.constipation,
                                selleLiquide: selleLiquide || updateddigestive.selleLiquide,
                                spasmeIntestinaux: spasmeIntestinaux || updateddigestive.spasmeIntestinaux,
                                douleurVesiculaire: douleurVesiculaire || updateddigestive.douleurVesiculaire,
                                imperiositeFecale: imperiositeFecale || updateddigestive.imperiositeFecale,
                                amaigrissement: amaigrissement || updateddigestive.amaigrissement,
                                prisePoids: prisePoids || updateddigestive.prisePoids,
                                saignementDigestifHaut: saignementDigestifHaut || updateddigestive.saignementDigestifHaut,
                                saignementDigestifBas: saignementDigestifBas || updateddigestive.saignementDigestifBas,
                                criseHemorroide: criseHemorroide || updateddigestive.criseHemorroide,
                                commentaire: commentaire || updateddigestive.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionDigestive(req, res) {
        return ManifestionDigestive
            .findByPk(req.params.id)
            .then(digestive => {
                if (!digestive) {
                    return res.status(400).send({
                        message: 'Digestive Not Found',
                    });
                }
                return digestive
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Digestive successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifDigestive;
