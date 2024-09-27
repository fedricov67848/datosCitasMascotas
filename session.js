let inicioForm = document.querySelector(".inicio")

inicioForm.addEventListener("submit", (e) => {
e.preventDefault()

let correo = document.getElementById("correo").value
let contraseña = document.getElementById("contraseña").value
let nombre_apellidos = document.getElementById("nombre_apellidos").value
let telefono = document.getElementById("telefono").value


let data = {
    correo,
    contraseña,
    nombre_apellidos,
    telefono,
}

fetch('/session', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json' 
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