

module.exports = {
    HOST: "DESKTOP-0PL6000",
    USER: "sa",
    PASSWORD: "1234",
    DB: "CONTROL_ASISTENCIA_MUNI",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
};