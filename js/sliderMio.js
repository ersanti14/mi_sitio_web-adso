let slider = document.querySelector(".slider"); 
let moverDer = document.querySelector(".slider-der");
let moverIzq = document.querySelector(".slider-izq");
let imagenes = document.querySelectorAll(".img-spiderman").length;

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

function moverIzquierda()
{
    contador--;
        if( contador < 0){
            contador = imagenes - 1;
        }
    slider.style.transition = "all 1s ease";
    slider.style.marginLeft = `-${contador * 100}%`;
}
moverIzq.addEventListener("click", moverIzquierda);