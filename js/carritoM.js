

//codigo gpt mas complejo con contador

// Obtener la imagen principal y las imágenes en miniatura
let linImg = document.getElementById("linImg");
let imgMinif = document.querySelectorAll(".img-mini-fondo");

// Obtener los botones de "izquierda" y "derecha"
let btnDere = document.getElementById("btnDere");
let btnIzq = document.getElementById("btnIzq");

// Inicializar la variable para el índice de la imagen actual
let currentIndex = 0;

// Función para actualizar la imagen principal y las imágenes en miniatura
function updateImages() {
    // Cambiar la fuente de la imagen principal por la imagen correspondiente al índice actual
    linImg.setAttribute("src", `imagenes/img-mini-${currentIndex + 1}.jpg`);

    // Cambiar la clase de las imágenes en miniatura para indicar cuál está seleccionada
    for (let j = 0; j < imgMinif.length; j++) {
        if (j === currentIndex) {
            imgMinif[j].classList.add("img-fondo-act", "box-img-fondo");
        } else {
            imgMinif[j].classList.remove("img-fondo-act", "box-img-fondo");
        }
    }
}

// Agregar un escuchador de eventos "click" a cada imagen en miniatura
for (let i = 0; i < imgMinif.length; i++) {
    imgMinif[i].addEventListener("click", function () {
        // Actualizar el índice actual y actualizar las imágenes
        currentIndex = i;
        updateImages();
    });
}

// Agregar un escuchador de eventos "click" al botón de "derecha"
btnDere.addEventListener("click", function () {
    // Incrementar el índice actual y asegurarse de que no sea mayor que la cantidad de imágenes
    currentIndex++;
    if (currentIndex >= imgMinif.length) {
        currentIndex = 0;
    }

    // Actualizar las imágenes
    updateImages();
});

// Agregar un escuchador de eventos "click" al botón de "izquierda"
btnIzq.addEventListener("click", function () {
    // Decrementar el índice actual y asegurarse de que no sea menor que cero
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgMinif.length - 1;
    }

    // Actualizar las imágenes
    updateImages();
});

///cambiar totales suma
//progarmacion orientada a objetos


/// primera explicacion para cambiar el contenido de un div

/* btnResta.addEventListener("click",function(){
    // creamos un parrafo
    let nodeToAdd = document.createElement("p");
    //creamos el texto del parrafo 
    let nodeText = document.createTextNode("0");
    // conectamos el texto con el nodo
    nodeToAdd.appendChild(nodeText);
    btnResta.appendChild(nodeToAdd);
    btnCant.appendChild(nodeToAdd);
});
 */