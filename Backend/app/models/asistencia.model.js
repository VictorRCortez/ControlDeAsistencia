
module.exports = (sequelize, Sequelize) => {
    const Asistencia = sequelize.define("asistencia", {
        horaEntrada: {
            type: Sequelize.TIME(6),
            // defaultValue: Sequelize.NOW,
            allowNull: false,
            // validate: {
            //     isLate: function () {
            //         const horaEntradaEmpleado = this.horaEntrada
            //         const horaEntradaEsperada = '08:00:00';

            //         if (horaEntradaEmpleado > horaEntradaEsperada) {
            //             throw new Error('El empleado llegó tarde');

            //         } else { 
            //             throw new Error('El empleado llegó puntual');
            //         }
            //     }
            // }
        },
        horaSalida: {
            type: Sequelize.TIME(6),
            // defaultValue: Sequelize.NOW,
            allowNull: false,

        },
        fecha: {
            type: Sequelize.DATE(6)	
        }

    });
    return Asistencia;

};