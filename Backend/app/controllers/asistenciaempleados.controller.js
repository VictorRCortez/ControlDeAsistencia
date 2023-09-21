const db = require("../models");
const Asistencia = db.asistencias;
const Empleado = db.empleados
const Op = db.sequelize.Op;

// Obtener todas las asistencias de todos los empleados
exports.findAllAsistencias = (req, res) => {
    Asistencia.findAll({
        include: [
            {
                model: Empleado, // Modelo empleado
                attributes: ["nombre"], // Solo queremos el nombre del empleado
            },
        ],
    })
        .then((asistencias) => {
            res.send(asistencias);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error al obtener todas las asistencias de los empleados.",
            });
        });
};