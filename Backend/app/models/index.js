const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.asistencias = require("./asistencia.model.js")(sequelize, Sequelize);
db.empleados = require("./empleado.model.js")(sequelize,Sequelize);
module.exports = db;

// Relacion entre empleado y asistencia (un empleado puede tener multiples asistencias)
db.empleados.hasMany(db.asistencias);
db.asistencias.belongsTo(db.empleados);
