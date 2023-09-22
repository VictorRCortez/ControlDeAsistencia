module.exports = app => {
    const sql = require('mssql');
    const dbConfig = require("../config/db.config.js"); // Importa la configuración de la base de datos

    var router = require("express").Router();

    app.get("/asistencias", async (req, res) => {
        try {
            const pool = await sql.connect(dbConfig); // Utiliza la configuración de la base de datos
            const result = await pool.request().query('EXEC VerAsistencia');

            res.json(result.recordset);
        } catch (err) {
            console.error('Error al ejecutar el procedimiento almacenado: ' + err.message);
            res.status(500).json({
                error: 'Error al ejecutar el procedimiento almacenado'
            });
        } finally {
            sql.close();
        }
    });
};
