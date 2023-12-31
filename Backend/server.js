const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

const db = require("./app/models");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

db.sequelize.sync({ alter: true }).then(() => {
    console.log("Drop and sync Db.");
})

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
}); 

require("./app/routes/asistencia.routes")(app);
require("./app/routes/empleado.routes")(app);
require("./app/routes/asistenciasempleados.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

