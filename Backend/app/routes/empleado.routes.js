module.exports = app => {
    const empleados = require("../controllers/empleado.controller.js");

    var router = require("express").Router();

    // Create a new Empleado
    router.post("/", empleados.create);

    // Retrieve all Empleado
    router.get("/", empleados.findAll);

    //Retrieve a single Empleado with id
    router.get("/:id", empleados.findOne);

    // Update a Empleados with id
    router.put("/:id", empleados.update);

    // Delete a Empleado with id 
    router.delete("/:id", empleados.delete);

    // Delete all Empleados
    router.delete("/", empleados.deleteAll);

    app.use('/api/empleados', router);
}