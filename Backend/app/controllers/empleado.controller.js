const db = require("../models");
const Empleado = db.empleados;
const Op = db.sequelize.Op;

// Create and save new Empleado
exports.create = (req, res) => {
    if (!req.body.nombre) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    // Create a empleado
    const empleado = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        cargo: req.body.cargo,
        departamento: req.body.departamento
    };

    // Save Empleado in the database
    Empleado.create(empleado)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                err.message || "Some error occurred while creating the Empleado."
            });
        });

};

// Retrieve all Empleado from the database.
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condiction = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

    Empleado.findAll({ where: condiction })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "some error ocurred while retrieving empleados. "
            });
        });

};

// Find a single Empleado with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Empleado.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Empleado with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Empleado with id=" + id
            });
        });
};

// Update a Empleado by the id in the request
exports.update = (req, res) => {

    const id = req.params.id;

    Empleado.update(req.body, {
        where: { id: id }
    })

        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Empleado was update successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Empleado whit id=${id}. Maybe Asistencia was not found or req.body is empty!`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Empleado whit id=" + id
            });
        });

};

// Delete a Empleado with the specified id in the request
exports.delete = (req, res) => {

    const id = req.params.id;

    Empleado.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Empleado was deleted successfully!"
                });
            }
            else {
                res.send({
                    message: `Cannot delete Empleado with id=${id}. Maybe Empleado was not found!`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Empleado with id=" + id
            });
        });
};

// Delete all Empleado from the database.
exports.deleteAll = (req, res) => {
    Empleado.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Empleado were deleted successfully! ` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while removing all empleados. "
            });
        });

};