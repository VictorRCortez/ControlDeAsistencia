
module.exports = (sequelize, Sequelize) => {
    const Asistencia = sequelize.define("asistencia", {
        horaEntrada: {
            type: Sequelize.TIME,
            // allowNull: false,
            // defaultValue: Sequelize.literal('CURRENT_TIME')
        },
        horaSalida: {
            type: Sequelize.TIME,
            // allowNull: false,
            // defaultValue: Sequelize.literal('CURRENT_TIME')
        }


    });
    return Asistencia;

};