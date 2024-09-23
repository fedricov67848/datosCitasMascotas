let formulario = document.querySelector(".formulario")




formulario.addEventListener("submit" , (e) => {

e.preventDefault()

let fechHo  = document.getElementById("fechHo").value
let razaMa = document.getElementById("razaMa").value
let serv = document.getElementById("serv").value;


let data = {
    serv,
    fechHo,
    razaMa

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

    window.location.href = 'index.html';
})