/* let imgBox = document.getElementById("imgBox");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");

imgMini1.addEventListener("click",function() {
    imgBox.setAttribute("src","imagenes/img-mini-1.jpg");
    imgMini1.classList.add("img-mini-act");
    imgMini2.classList.remove("img-mini-act");
    imgMini3.classList.remove("img-mini-act");
    imgMini4.classList.remove("img-mini-act");

    imgMini1.classList.add("box-img-mini");
    imgMini2.classList.remove("box-img-mini");
    imgMini3.classList.remove("box-img-mini");
    imgMini4.classList.remove("box-img-mini");
});
imgMini2.addEventListener("click",function() {
    imgBox.setAttribute("src","imagenes/img-mini-2.jpg");
    imgMini2.classList.add("img-mini-act");
    imgMini1.classList.remove("img-mini-act");
    imgMini3.classList.remove("img-mini-act");
    imgMini4.classList.remove("img-mini-act");

    imgMini2.classList.add("box-img-mini");
    imgMini1.classList.remove("box-img-mini");
    imgMini3.classList.remove("box-img-mini");
    imgMini4.classList.remove("box-img-mini");
    
});
imgMini3.addEventListener("click",function() {
    imgBox.setAttribute("src","imagenes/img-mini-3.jpg");
    imgMini3.classList.add("img-mini-act");
    imgMini1.classList.remove("img-mini-act");
    imgMini2.classList.remove("img-mini-act");
    imgMini4.classList.remove("img-mini-act");
    
    imgMini3.classList.add("box-img-mini");
    imgMini1.classList.remove("box-img-mini");
    imgMini2.classList.remove("box-img-mini");
    imgMini4.classList.remove("box-img-mini");
});
imgMini4.addEventListener("click",function() {
    imgBox.setAttribute("src","imagenes/img-mini-4.jpg");
    imgMini4.classList.add("img-mini-act");
    imgMini1.classList.remove("img-mini-act");
    imgMini2.classList.remove("img-mini-act");
    imgMini3.classList.remove("img-mini-act");

    imgMini4.classList.add("box-img-mini");
    imgMini1.classList.remove("box-img-mini");
    imgMini2.classList.remove("box-img-mini");
    imgMini3.classList.remove("box-img-mini");
}); */
/// codigo super resumido de gpt
let imgBox = document.getElementById("imgBox");
let imgMinis = document.querySelectorAll(".img-mini");

for (let i = 0; i < imgMinis.length; i++) {
    imgMinis[i].addEventListener("click", function () {
        imgBox.setAttribute("src", `imagenes/img-mini-${i + 1}.jpg`);

        for (let j = 0; j < imgMinis.length; j++) {
            if (j === i) {
                imgMinis[j].classList.add("img-mini-act", "box-img-mini");
            } else {
                imgMinis[j].classList.remove("img-mini-act", "box-img-mini");
            }
        }
    });
}
//fondo cambio imagenes 

// Obtener la imagen principal y las imágenes en miniatura
let linImg = document.getElementById("linImg");
let imgMinif = document.querySelectorAll(".img-mini-fondo");

// Obtener los botones de "izquierda" y "derecha"
let btnDere = document.getElementById("btnDere");
let btnIzq = document.getElementById("btnIzq");

// Inicializar la variable para el índice de la imagen actual
let currentIndex = 0;

// Agregar un escuchador de eventos "click" a cada imagen en miniatura
for (let i = 0; i < imgMinif.length; i++) {
    imgMinif[i].addEventListener("click", function () {
        // Cambiar la fuente de la imagen principal por la imagen correspondiente al índice seleccionado
        linImg.setAttribute("src", `imagenes/img-mini-${i + 1}.jpg`);

        // Cambiar la clase de las imágenes en miniatura para indicar cuál está seleccionada
        for (let j = 0; j < imgMinif.length; j++) {
            if (j === i) {
                imgMinif[j].classList.add("img-fondo-act");
                imgMinif[j].classList.add("box-img-fondo");
            } else {
                imgMinif[j].classList.remove("img-fondo-act");
                imgMinif[j].classList.remove("box-img-fondo");
            }
        }

        // Actualizar el índice actual
        currentIndex = i;
    });
}

// Agregar un escuchador de eventos "click" al botón de "derecha"
btnDere.addEventListener("click", function () {
    // Incrementar el índice actual y asegurarse de que esté dentro de los límites
    currentIndex = (currentIndex + 1) % imgMinif.length;

    // Actualizar la imagen principal y las imágenes en miniatura
    linImg.setAttribute("src", `imagenes/img-mini-${currentIndex + 1}.jpg`);
    for (let j = 0; j < imgMinif.length; j++) {
        if (j === currentIndex) {
            imgMinif[j].classList.add("img-fondo-act");
            imgMinif[j].classList.add("box-img-fondo");
        } else {
            imgMinif[j].classList.remove("img-fondo-act");
            imgMinif[j].classList.remove("box-img-fondo");
        }
    }
});

// Agregar un escuchador de eventos "click" al botón de "izquierda"
btnIzq.addEventListener("click", function () {
    // Decrementar el índice actual y asegurarse de que esté dentro de los límites
    currentIndex = (currentIndex - 1 + imgMinif.length) % imgMinif.length;

    // Actualizar la imagen principal y las imágenes en miniatura
    linImg.setAttribute("src", `imagenes/img-mini-${currentIndex + 1}.jpg`);
    for (let j = 0; j < imgMinif.length; j++) {
        if (j === currentIndex) {
            imgMinif[j].classList.add("img-fondo-act");
            imgMinif[j].classList.add("box-img-fondo");
        } else {
            imgMinif[j].classList.remove("img-fondo-act");
            imgMinif[j].classList.remove("box-img-fondo");
        }
    }
});



//// codigo mio
/* let linImg = document.getElementById("linImg");
let imgMinif = document.querySelectorAll(".img-mini-fondo");

for (let i = 0; i < imgMinif.length; i++) {
    imgMinif[i].addEventListener("click", function () {
        linImg.setAttribute("src", `imagenes/img-mini-${i + 1}.jpg`);

        for (let j = 0; j < imgMinif.length; j++) {
            if (j === i) {
                imgMinif[j].classList.add("img-fondo-act", "box-img-fondo");
            } else {
                imgMinif[j].classList.remove("img-fondo-act", "box-img-fondo");
            }
        }
    });
}
let btnDere = Document.getElementById("btnDere");

for (let i = 0; i < btnDere; i++) {
    btnDere[i].addEventListener("click", function () {
        linImg.setAttribute("src", `imagenes/img-mini-${i + 1}.jpg`);

        for (let j = 0; j < btnDere.length; j++) {
            if (j === i) {
                btnDere[j].classList.add("img-fondo-act", "box-img-fondo");
            } else {
                btnDere[j].classList.remove("img-fondo-act", "box-img-fondo");
            }
        }
    })
}; */

//fondo ocuro mio 
let boDy = document.getElementById("boDy")
imgBox.addEventListener("click", function () {
    boDy.classList.add("fondo")
})
//fondo oscuro
let btnAtras = document.getElementById("btnAtras")
let lightBox = document.getElementById("lightBox");
imgBox.addEventListener("click", function () {
    lightBox.classList.remove("light-hidden");
});

btnAtras.addEventListener("click", function () {
    lightBox.classList.add("light-hidden")
})

//parte 2 codigo resumido gpt

/* let numElem = document.getElementById("numElem");
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");

btnSuma.addEventListener("click", function() {
numElem.textContent = parseInt(numElem.textContent) + 1;
});
btnResta.addEventListener("click", function() {
let currentNum = parseInt(numElem.textContent);
if (currentNum > 0) {
    numElem.textContent = currentNum - 1;
}
}); */

//codigo mio sin resumir 

let btnResta = document.getElementById("btnResta");
let btnSuma = document.getElementById("btnSuma");
let cantBox = document.getElementById("cantBox");
let btnCant = document.getElementById("btnCant");
let numElem = document.getElementById("numElem");
let numElemTxt = document.getElementById("numElem").innerHTML;

let valorUnitario = 199999
let valorUnitarioTxt = valorUnitario.toString();

let valorUnitarioPeso = new Intl.NumberFormat().format(valorUnitarioTxt);

let cantNumTotal = valorUnitarioTxt.length;

let valorTotal = document.getElementById("valorTotal");
let valorTotalInt = 0;

btnSuma.addEventListener("click", function () {
    let numElemTxt = document.getElementById("numElem").innerHTML;
    let numElemInt = parseInt(numElemTxt);
    if (numElemInt < 20) {
        let totalElemInt = numElemInt + 1;
        let totalElemtxt = totalElemInt.toString();
        numElem.innerHTML = totalElemtxt;
        valorTotalInt = valorUnitario * totalElemtxt;
        valorTotal.innerHTML = "$" + new Intl.NumberFormat().format(valorTotalInt);
    }
});
btnResta.addEventListener("click", function () {
    let numElemTxt = document.getElementById("numElem").innerHTML;
    let numElemInt = parseInt(numElemTxt);
    if (numElemInt > 0) {
        let totalElemInt = numElemInt - 1;
        let totalElemtxt = totalElemInt.toString();
        numElem.innerHTML = totalElemtxt;

        valorTotalInt = valorUnitario * totalElemInt;
        valorTotal.innerHTML = "$" + new Intl.NumberFormat().format(valorTotalInt);

    }
});