
const express = require("express")
const mysql = require("mysql")
const { format } = require('date-fns');
const path = require("path");
const app = express()

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, '/')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'inicioSesion.html'));
});


let conection = mysql.createConnection({
    host: "127.0.0.1",
    database: "tablamascotas",
    user: "root",
    password: ""
})


let conectionUsuarios = mysql.createConnection({
  host: "127.0.0.1",
  database: "loginusuario",
  user: "root",
  password: ""
})






app.post("/enviar", (req, res) => {
    let datos = req.body

    let fechHo = datos.fechHo
    let servicio = datos.serv
    let razaMa = datos.razaMa
    
    let registar = "INSERT INTO mascotas(servicio ,fecha_hora,raza_mascota)VALUES('" + servicio + "','" + fechHo + "','" + razaMa + "')";


    conection.query(registar, function (error , results) {
        if (error) {
            res.send("error envia datos")
            throw error;
        } else {

            console.log("datos almacenados correctamente")
            console.log(results)
            res.send({data : results})
            
        }
    })
})


app.post("/session", (req, res) => {
  let datos = req.body

  let correo = datos.correo
  let contraseña = datos.contraseña
  let nombreApelli = datos.nombre_apellidos
  let telefono = datos.telefono
  
  let registar = "INSERT INTO usuario(correo,contraseina,nomApelli,telefono)VALUES('" + correo + "','" + contraseña + "','" + nombreApelli + "' ,'" + telefono + "')";


  conectionUsuarios.query(registar, function (error , results) {
      if (error) {
          res.send("error envia datos")
          throw error;
      } else {

          console.log("datos almacenados correctamente")
          console.log(results)
          res.send({data : results})
          
      }
  })
})


app.get("/traer", (req, res) => {
  

    let consulta = "SELECT * FROM mascotas";
  
    conection.query( consulta, function (error, results) {
      if (error) {
        console.error("Error al obtener los datos: ", error);
        res.status(500).send({ success: false, message: "Error al obtener los datos" });
      } else {
        console.log(results);
        res.send({ success: true, data: results });
      }
    });
  });
  



app.listen(4000, () => {
    console.log("servidor corriendo")
})





