let formulario = document.querySelector(".formulario")
let user;

fetch("/obtener")
.then(response => response.json())
.then(data => {
    console.log(data);
     
    data.data.forEach(element => {
         user = element.nomApelli
    
    });
})
.catch(error => console.error("Error al traer los datos:", error));

formulario.addEventListener("submit" , (e) => {

e.preventDefault()

let fechHo  = document.getElementById("fechHo").value
let razaMa = document.getElementById("razaMa").value
let serv = document.getElementById("serv").value;


let data = {
    serv,
    fechHo,
    razaMa,
    nombre : user
};

 
    fetch('/enviar', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' // Indicamos que el cuerpo será JSON
        },
        body: JSON.stringify(data) 
    }).then(response => response.json())
    .then(data => {
        console.log('Éxito:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    window.location.href = 'verCitas.html';
})