const mysql = require("mysql");
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1991leonardo",
  port: 3306,
  database: "movie",
});

conexion.connect((err) => {
  if (err) {
    console.log("Ha ocurrido un error: " + err);
  } else {
    console.log("La base de datos se conecto!");
  }
});

module.exports = conexion;
