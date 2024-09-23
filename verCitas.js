let contenido = document.getElementById("contenido");
let tablaCitas = document.querySelector("#tabla-citas tbody");

/*cedula , nombre_apellidos , telefono , correo ,servicios , fecha_hora*/
fetch("/traer")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        data.data.forEach(element => {
            // Crea una nueva fila para la tabla
            let fila = document.createElement("tr");

            // Rellena cada celda de la fila con los datos correspondientes
            fila.innerHTML = `
                <td>${element.servicio}</td>
                <td>${element.raza_mascota}</td>
                <td>${element.fecha_hora}</td>
            `;

            // Añade la fila al cuerpo de la tabla
            tablaCitas.appendChild(fila);
        });
    })
    .catch(error => console.error("Error al traer los datos:", error));
