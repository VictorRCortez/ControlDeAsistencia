module.exports = app => {
    const listasistencias = require("../controllers/asistenciaempleados.controller.js");

    var router = require("express").Router();

    router.get("/", listasistencias.findAllAsistencias),

        app.use('/api/listasistencias', router);


}
