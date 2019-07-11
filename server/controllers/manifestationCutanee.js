import model from '../models';

const {ManifestionCutanee} = model;

class ManifCutanee {

    static addManifestionCutanee(req, res) {
        const {
            eruptionCutanee, secheresseCutanee, ecchymoseApresChoc, ecchymoseSpontanee, plaie, hyperhydrose, flush, urticaire, eczema, psoriasis,
            demangeaison, hematome, furoncle, dyshydrose, pousseeAcnee, pousseeBoutonNonIndentifie, crevasse, engelure, desquamation, gercure, plaqueRouge,
            irritation, boutonChaleur, brulure, apparitionPetechis, commentaire, idUtilisateur
        } = req.body;
        return ManifestionCutanee
            .create({
                eruptionCutanee,
                secheresseCutanee,
                ecchymoseApresChoc,
                ecchymoseSpontanee,
                plaie,
                hyperhydrose,
                flush,
                urticaire,
                eczema,
                psoriasis,
                demangeaison,
                hematome,
                furoncle,
                dyshydrose,
                pousseeAcnee,
                pousseeBoutonNonIndentifie,
                crevasse,
                engelure,
                desquamation,
                gercure,
                plaqueRouge,
                irritation,
                boutonChaleur,
                brulure,
                apparitionPetechis,
                commentaire,
                idUtilisateur
            })
            .then(addManifestionCutanee => res.status(201).send({
                success: true,
                message: 'Cutanee symptome successfully created',
                addManifestionCutanee
            }))
    }

    static getManifestionCutanee(req, res) {
        return ManifestionCutanee
            .findAll()
            .then(listeManifestionCutanee => res.status(200).send(listeManifestionCutanee));
    }

    static getOneManifestionCutaneeByIdUtilisateur(req, res) {
        return ManifestionCutanee
            .findOne({limit: 1, where: {idUtilisateur: req.params.id}, order: [['id', 'DESC']]})
            .then(listeManifestionCutanee => res.status(200).send(listeManifestionCutanee));
    }

    static getAllManifestionCutaneeByIdUtilisateur(req, res) {
        return ManifestionCutanee
            .findAll({where: {idUtilisateur: req.params.id}})
            .then(listeManifestionCutanee => res.status(200).send(listeManifestionCutanee));
    }

    static updateManifestionCutanee(req, res) {
        const {
            eruptionCutanee, secheresseCutanee, ecchymoseApresChoc, ecchymoseSpontanee, plaie, hyperhydrose, flush, urticaire, eczema, psoriasis,
            demangeaison, hematome, furoncle, dyshydrose, pousseeAcnee, pousseeBoutonNonIndentifie, crevasse, engelure, desquamation, gercure, plaqueRouge,
            irritation, boutonChaleur, brulure, apparitionPetechis, commentaire
        } = req.body;
        return ManifestionCutanee
            .findByPk(req.params.id)
            .then((cutanee) => {
                cutanee.update({
                    eruptionCutanee: eruptionCutanee || cutanee.eruptionCutanee,
                    secheresseCutanee: secheresseCutanee || cutanee.secheresseCutanee,
                    ecchymoseApresChoc: ecchymoseApresChoc || cutanee.ecchymoseApresChoc,
                    ecchymoseSpontanee: ecchymoseSpontanee || cutanee.ecchymoseSpontanee,
                    plaie: plaie || cutanee.plaie,
                    hyperhydrose: hyperhydrose || cutanee.hyperhydrose,
                    flush: flush || cutanee.flush,
                    urticaire: urticaire || cutanee.urticaire,
                    eczema: eczema || cutanee.eczema,
                    psoriasis: psoriasis || cutanee.psoriasis,
                    demangeaison: demangeaison || cutanee.demangeaison,
                    hematome: hematome || cutanee.hematome,
                    furoncle: furoncle || cutanee.furoncle,
                    dyshydrose: dyshydrose || cutanee.dyshydrose,
                    pousseeAcnee: pousseeAcnee || cutanee.pousseeAcnee,
                    pousseeBoutonNonIndentifie: pousseeBoutonNonIndentifie || cutanee.pousseeBoutonNonIndentifie,
                    crevasse: crevasse || cutanee.crevasse,
                    engelure: engelure || cutanee.engelure,
                    desquamation: desquamation || cutanee.desquamation,
                    gercure: gercure || cutanee.gercure,
                    plaqueRouge: plaqueRouge || cutanee.plaqueRouge,
                    irritation: irritation || cutanee.irritation,
                    boutonChaleur: boutonChaleur || cutanee.boutonChaleur,
                    brulure: brulure || cutanee.brulure,
                    apparitionPetechis: apparitionPetechis || cutanee.apparitionPetechis,
                    commentaire: commentaire || cutanee.commentaire
                })
                    .then((updatedcutanee) => {
                        res.status(200).send({
                            message: 'Cutanee updated',
                            data: {
                                eruptionCutanee: eruptionCutanee || updatedcutanee.eruptionCutanee,
                                secheresseCutanee: secheresseCutanee || updatedcutanee.secheresseCutanee,
                                ecchymoseApresChoc: ecchymoseApresChoc || updatedcutanee.ecchymoseApresChoc,
                                ecchymoseSpontanee: ecchymoseSpontanee || updatedcutanee.ecchymoseSpontanee,
                                plaie: plaie || updatedcutanee.plaie,
                                hyperhydrose: hyperhydrose || updatedcutanee.hyperhydrose,
                                flush: flush || updatedcutanee.flush,
                                urticaire: urticaire || updatedcutanee.urticaire,
                                eczema: eczema || updatedcutanee.eczema,
                                psoriasis: psoriasis || updatedcutanee.psoriasis,
                                demangeaison: demangeaison || updatedcutanee.demangeaison,
                                hematome: hematome || updatedcutanee.hematome,
                                furoncle: furoncle || updatedcutanee.furoncle,
                                dyshydrose: dyshydrose || updatedcutanee.dyshydrose,
                                pousseeAcnee: pousseeAcnee || updatedcutanee.pousseeAcnee,
                                pousseeBoutonNonIndentifie: pousseeBoutonNonIndentifie || updatedcutanee.pousseeBoutonNonIndentifie,
                                crevasse: crevasse || updatedcutanee.crevasse,
                                engelure: engelure || updatedcutanee.engelure,
                                desquamation: desquamation || updatedcutanee.desquamation,
                                gercure: gercure || updatedcutanee.gercure,
                                plaqueRouge: plaqueRouge || updatedcutanee.plaqueRouge,
                                irritation: irritation || updatedcutanee.irritation,
                                boutonChaleur: boutonChaleur || updatedcutanee.boutonChaleur,
                                brulure: brulure || updatedcutanee.brulure,
                                apparitionPetechis: apparitionPetechis || updatedcutanee.apparitionPetechis,
                                commentaire: commentaire || updatedcutanee.commentaire
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteManifestionCutanee(req, res) {
        return ManifestionCutanee
            .findByPk(req.params.id)
            .then(cutanee => {
                if (!cutanee) {
                    return res.status(400).send({
                        message: 'Cutanee Not Found',
                    });
                }
                return cutanee
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Cutanee successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ManifCutanee;
