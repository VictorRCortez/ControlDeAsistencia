const db = require("../models");
const Asistencia = db.asistencias;
const Empleado = db.empleados
const Op = db.Sequelize.Op;

// Create and Save a new Asistencia
exports.create = (req, res) => {
    if (!req.body.horaEntrada) {
        res.status(400).send({
            message: "Content can not be empty!"
        });


        return;
    }

        // // Verificar si el empleado llegó tarde o puntual
        // const horaEntradaEmpleado = req.body.horaEntrada;
        // const horaEntradaEsperada = '08:00:00';
    
        // let mensajeValidacion = "";
    
        // if (horaEntradaEmpleado > horaEntradaEsperada) {
        //     mensajeValidacion = "El empleado llegó tarde";
        // } else if (horaEntradaEmpleado === horaEntradaEsperada) {
        //     mensajeValidacion = "El empleado llegó puntual";
        // }
    
        // // Si hay un mensaje de validación, enviarlo como respuesta sin guardar en la base de datos
        // if (mensajeValidacion !== "") {
        //     res.status(400).send({ message: mensajeValidacion });
        //     return;
        // }

    //Create a asistencia
    const asistencia = {
        horaEntrada: req.body.horaEntrada,
        horaSalida: req.body.horaSalida,
        empleadoId: req.body.empleadoId

    };

    // Save Tutorial in the database
    Asistencia.create(asistencia)

        .then(data => {
            res.send(data);

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Asistencia."
            });
        });
};

// Retrieve all Asistencias from the database.
exports.findAll = (req, res) => {
    const horaEntrada = req.query.horaEntrada;
    var condiction = horaEntrada ? { horaEntrada: { [Op.like]: `%${horaEntrada}%` } } : null;

    Asistencia.findAll({ where: condiction })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "some error ocurred while retrieving asistencias. "
            });
        });

};

// Find a single Asistencia with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Asistencia.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tutorial with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });
};

// Update a Asistencia by the id in the request
exports.update = (req, res) => {

    const id = req.params.id;

    Asistencia.update(req.body, {
        where: { id: id }
    })

        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Asistencia was update successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Asitencia whit id=${id}. Maybe Asistencia was not found or req.body is empty!`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Asistencia whit id=" + id
            });
        });

};

// Delete a Asistencia with the specified id in the request
exports.delete = (req, res) => {

    const id = req.params.id;

    Asistencia.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Asistencia was deleted successfully!"
                });
            }
            else {
                res.send({
                    message: `Cannot delete Asistencia with id=${id}. Maybe Asitencia was not found!`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Asistencia with id=" + id
            });
        });
};

// Delete all Asistencias from the database.
exports.deleteAll = (req, res) => {
    Asistencia.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Asitencia were deleted successfully! ` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while removing all asistencias. "
            });
        });


};