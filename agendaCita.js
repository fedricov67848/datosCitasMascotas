let formulario = document.querySelector(".formulario")




formulario.addEventListener("submit" , (e) => {

e.preventDefault()

let ced = document.getElementById("ced").value;
let nomApe = document.getElementById("nomApe").value;
let tele = document.getElementById("tele").value;
let email = document.getElementById("email").value;
let serv = document.getElementById("serv").value;
let contra = document.getElementById("contra").value;

let data = {
    ced,
    nomApe : nomApe,
    tele,
    email,
    serv,
    contra
};
console.log(nomApe)
 
    fetch('/enviar', {
        method: 'POST', // Tipo de solicitud
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
})