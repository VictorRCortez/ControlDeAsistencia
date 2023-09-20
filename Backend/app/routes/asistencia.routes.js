module.exports = app => {
    const asistencias = require("../controllers/asistencia.controller.js");

    var router = require("express").Router();

    // Create a new Asistencia
    router.post("/", asistencias.create);

    // Retrieve all Asitencias
    router.get("/", asistencias.findAll);

    //Retrieve a single Aistencia with id
    router.get("/:id", asistencias.findOne);

    // Update a Asistencia with id
    router.put("/:id", asistencias.update);

    // Delete a Asistencia with id 
    router.delete("/:id", asistencias.delete);

    // Delete all Asistencias
    router.delete("/", asistencias.deleteAll);

    app.use('/api/asistencias', router);
}