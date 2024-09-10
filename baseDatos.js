
const express = require("express")
const mysql = require("mysql")
const { format } = require('date-fns');
const path = require("path");
const app = express()

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, '/')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'agendaCita.html'));
});


let conection = mysql.createConnection({
    host: "127.0.0.1",
    database: "animalesdatos",
    user: "root",
    password: ""
})





app.post("/enviar", (req, res) => {
    let datos = req.body

    let cedu = datos.ced
    let nomApell = datos.nomApe
    let telefono = datos.tele
    let email = datos.email
    let servicio = datos.serv
    let contra = datos.contra
    let horaFecha = format(new Date(), "yyyy-MM-dd hh:mm:ss a")



    let registar = "INSERT INTO animales(cedula ,nombre_apellidos, telefono,correo,servicios,contrasena , fecha_hora)VALUES('" + cedu + "','" + nomApell + "','" + telefono + "','" + email + "','" + servicio + "','" + contra + "' , '" +horaFecha + "')";


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


app.get("/traer", (req, res) => {
  

    let consulta = "SELECT * FROM animales";
  
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





