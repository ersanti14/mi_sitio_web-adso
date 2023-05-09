var imagenes = [
    "imagenes/spiderman1.webp",
    "imagenes/spiderman2.webp",
    "imagenes/spiderman3.webp",
    "imagenes/spiderman4.webp",
];

document.imagen.src = imagenes[0];

let sliderDerecha = document.querySelector(".slider-der");
let sliderIzquierdo = document.querySelector(".slider-izq");
var contador = 0;

function cambioDerecha() {
    contador++;
    if (contador > imagenes.length - 1) {
        contador = 0;
    }
    document.imagen.src = imagenes[contador];
}

/* sliderDerecha.addEventListener("click", cambioDerecha); */

var intervalo = setInterval(cambioDerecha, 2000);
sliderDerecha.addEventListener("click", function () {

    clearInterval(intervalo);
    cambioDerecha();
    intervalo = setInterval(cambioDerecha, 2000);
});

function cambioIzquierda() {
    contador--;
    if (contador < 0) {
        contador = imagenes.length - 1;
    }
    document.imagen.src = imagenes[contador];
}
/* sliderIzquierdo.addEventListener("click", cambioIzquierda);
 */

sliderIzquierdo.addEventListener("click", function () 
{
    clearInterval(intervalo);
    cambioIzquierda();
    intervalo = setInterval(cambioDerecha, 2000);
});