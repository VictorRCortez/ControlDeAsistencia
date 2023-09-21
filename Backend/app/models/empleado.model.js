module.exports = (sequelize, Sequelize) => {
    const Empleado = sequelize.define("empleado",{
        nombre: {
            type : Sequelize.STRING
        },
        telefono: {
            type : Sequelize.STRING
        },
        cargo: {
            type:Sequelize.STRING
        },
        departamento: {
            type:Sequelize.STRING
        },
    });
    return Empleado;
};