let imagenesLabado = document.querySelectorAll(".imagenlabado")

imagenesLabado.forEach(element =>{
element.addEventListener("mouseenter" , grande  )

})

imagenesLabado.forEach(element =>{
    element.addEventListener("mouseleave" , pequeño  )
    
    })


let imagenHerramientas = document.querySelectorAll(".imagenherramienta")

imagenHerramientas.forEach(elementos =>{
elementos.addEventListener("mouseenter" , grande  )

})

imagenHerramientas.forEach(elementos =>{
    elementos.addEventListener("mouseleave" , pequeño  )
    
    })


function grande(event){
let valor = event.target
valor.style.height = "450px"
valor.style.width = "450px"
valor.style.transition = "all .5s ease"
}


function pequeño(event){
    let valor = event.target
    valor.style.height = "400px"
    valor.style.width = "400px"
    valor.style.transition = "all .5s ease"
    }


let imagenPeluqueria = document.querySelectorAll(".imagenpeluqueria")
imagenPeluqueria.forEach(elementosten =>{
    elementosten.addEventListener("mouseenter" , grande  )
    
    })
    
    imagenPeluqueria.forEach(elementosten =>{
        elementosten.addEventListener("mouseleave" , pequeño  )
        
        })
    

       

let servicio1 = document.querySelector(".imputPeluqueria")
let servicio2 = document.querySelector(".imputPeluqueria1")
let servicio3 = document.querySelector(".imputPeluqueria2")

let lavel1;

servicio1.addEventListener("change", () => {
 
 lavel1 = document.getElementById("lavel1").textContent
 console.log(lavel1)
})

servicio2.addEventListener("change", () => {
 lavel1 = document.getElementById("lavel2").textContent
 console.log(lavel1)
})

servicio3.addEventListener("change", () => {
       
    lavel1 = document.getElementById("lavel3").textContent
    console.log(lavel1) 
})






    
    




