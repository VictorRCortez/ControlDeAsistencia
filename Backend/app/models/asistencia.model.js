
module.exports = (sequelize, Sequelize) => {
    const Asistencia = sequelize.define("asistencia", {
        nombre: {
            type: Sequelize.STRING
        },
        nota: {
            type: Sequelize.STRING
        },

        fecha: {
            type : Sequelize.DATE(6) 
        },

    });
    return Asistencia;

};