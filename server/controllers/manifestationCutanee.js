import model from '../models';

const {ManifestionCutanee} = model;

class ManifCutanee {

    static addManifestionCutanee(req, res) {
        const {
            eruptionCutanee, secheresseCutanee, ecchymoseApresChoc, ecchymoseSpontanee, plaie, hyperhydrose, flush, urticaire, eczema, psoriasis,
            demangeaison, hematome, furoncle, dyshydrose, pousseeAcnee, pousseeBoutonNonIndentifie, crevasse, engelure, desquamation, gercure, plaqueRouge,
            irritation, boutonChaleur, brulure, apparitionPetechis, commentaire
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
                commentaire
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

    static updateManifestionCutanee(req, res) {

    }

    static deleteManifestionCutanee(req, res) {

    }
}

export default ManifCutanee;
