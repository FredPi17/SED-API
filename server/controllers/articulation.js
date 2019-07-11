import model from '../models';

const {Articulation} = model;

class ArticulationHumaine {

    static addArticulation(req, res) {
        const {
            name
        } = req.body;
        return Articulation
            .create({
                name
            })
            .then(addArticulation => res.status(201).send({
                success: true,
                message: 'Articulation successfully created',
                addArticulation
            }))
    }

    static getArticulations(req, res) {
        return Articulation
            .findAll()
            .then(listeArticulations => res.status(200).send(listeArticulations));
    }

    static getArticulationById(req, res) {
        return Articulation
            .findOne({where: {id: req.params.id}})
            .then(articulation => res.status(200).send(articulation));
    }

    static updateArticulations(req, res) {
        const {
            name
        } = req.body;
        return Articulation
            .findByPk(req.params.id)
            .then((articulation) => {
                articulation.update({
                    name: name || articulation.name
                })
                    .then((updatedArticulation) => {
                        res.status(200).send({
                            message: 'Articulation updated',
                            data: {
                                name: name || updatedArticulation.name
                            }
                        })
                    })
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }

    static deleteArticulation(req, res) {
        return Articulation
            .findByPk(req.params.id)
            .then(articulation => {
                if (!articulation) {
                    return res.status(400).send({
                        message: 'Articulation Not Found',
                    });
                }
                return articulation
                    .destroy()
                    .then(() => res.status(200).send({
                        message: 'Articulation successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error))
    }
}

export default ArticulationHumaine;