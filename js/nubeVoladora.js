let slider = document.querySelector(".slider"); 
let moverDer = document.querySelector(".slider-der");
let imagenes = document.querySelectorAll(".img-spiderman").length;
/* let volar = document.getElementById("volar") */
let volarGoku = document.getElementById("pasar")

let contador = 0;

function moverDerecha()
{
    contador++;

        if(contador > imagenes -1){
            contador=0;
        }
        slider.style.transition = "all 1s ease";
    slider.style.marginLeft = `-${contador * 100}%`;
}

moverDer.addEventListener("click", moverDerecha);


const volar = document.getElementById('volar');
const nubeVoladora = document.querySelector('.nubeVoladora');

function activarVuelo() {
    nubeVoladora.classList.toggle('vuelo-activo');
}

volar.addEventListener("click", activarVuelo);

// También escucha el evento "keydown" en el documento para detectar la tecla "Enter"
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        activarVuelo();
    }
});
