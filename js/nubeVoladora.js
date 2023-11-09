let slider = document.querySelector(".slider");
let moverDer = document.querySelector(".slider-der");
let imagenes = document.querySelectorAll(".img-spiderman").length;
let volarGoku = document.getElementById("pasar")

let contador = 0;

function moverDerecha() {
    contador++;

    if (contador > imagenes - 1) {
        contador = 0;
    }
    slider.style.transition = "all 0.5s ease";
    slider.style.marginLeft = `-${contador * 100}%`;
}


moverDer.addEventListener("click", moverDerecha);





function activarVuelo() {
    nubeVoladora.classList.toggle('vuelo-activo');
}

volar.addEventListener("click", activarVuelo);

const nubeVoladora = document.querySelector('.nubeVoladora');
let topValue = 250;
let leftValue = 25;
const maxLeftValue = 1600;
const maxTopValue = 600;


let goku = document.querySelector(".goku")






window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight" && leftValue + 10 <= maxLeftValue) {
        leftValue += 100;
        nubeVoladora.style.left = leftValue + "px";
        nubeVoladora.style.transform = "scaleX(1)"
        console.log(leftValue)
        if (leftValue > 1550) {
            contador++;

            if (contador > imagenes - 1) {
                contador = 0;
            }
            slider.style.transition = "all 5s ease";
            slider.style.marginLeft = `-${contador * 100}%`;
        }

    } else if (event.key === "ArrowLeft" && leftValue - 10 >= 0) {
        leftValue -= 100;
        nubeVoladora.style.transform = "scaleX(-1)"
        nubeVoladora.style.left = leftValue + "px";
        console.log(leftValue)
        if (leftValue < 0) {
            contador++;

            if (contador > imagenes - 1) {
                contador = 0;
            }
            slider.style.transition = "all 3s ease";
            slider.style.marginLeft = `-${contador * 100}%`;
        }
    } else if (event.key === "ArrowDown" && topValue + 10 <= maxTopValue) {
        topValue += 100;
        nubeVoladora.style.top = topValue + "px";
    } else if (event.key === "ArrowUp" && topValue - 10 >= 0) {
        topValue -= 100;
        nubeVoladora.style.top = topValue + "px";
    }
});



