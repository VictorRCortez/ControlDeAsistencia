module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        contraseña: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        correo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        rol: {
            type: Sequelize.STRING,
            defaultValue: 'Administrador'
        },
    });
    return Admin
}