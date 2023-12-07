let valorStar = document.getElementById("valor");
let progressBar = document.querySelector("progress");
let calificacionTexto = document.getElementById("calificacionTexto");
let calificacionValor = document.getElementById("calificacionValor");

valorStar.addEventListener("submit", function (e) {
  e.preventDefault();

  var numberStar = document.getElementById("starValue").value;
  let boxStar = document.getElementById("boxStar");
  let mensajeError = document.getElementById("mensajeError");

  boxStar.innerHTML = "";
  mensajeError.innerHTML = ""; 
  numberStar = parseFloat(numberStar);

  if (!isNaN(numberStar) && numberStar >= 0 && numberStar <= 5) {
    // Actualizar el valor de la barra de progreso
    progressBar.value = numberStar * 20;

    // Mostrar la barra de progreso y el texto
    progressBar.classList.remove("hidden");
    calificacionTexto.classList.remove("hidden");

    // Mostrar la calificación
    calificacionValor.innerText = (numberStar * 20) + "%";

    let fullStars = Math.floor(numberStar);
    let remainingDecimal = numberStar - fullStars;
    let halfStar = remainingDecimal >= 0.3 && remainingDecimal < 0.7;
    let roundUp = remainingDecimal >= 0.7;

    if (roundUp) {
      fullStars += 1;
    }

    for (let i = 0; i < fullStars; i++) {
      let calificacionStarLlena = document.createElement("i");
      calificacionStarLlena.setAttribute("class", "ti ti-star-filled");
      boxStar.appendChild(calificacionStarLlena);
    }

    if (halfStar && !roundUp) {
      let calificacionStarMedia = document.createElement("i");
      calificacionStarMedia.setAttribute("class", "ti ti-star-half-filled");
      boxStar.appendChild(calificacionStarMedia);
    }

    for (let i = fullStars + ((halfStar && !roundUp) ? 1 : 0); i < 5; i++) {
      let calificacionStarVacia = document.createElement("i");
      calificacionStarVacia.setAttribute("class", "ti ti-star");
      boxStar.appendChild(calificacionStarVacia);
    }
  } else {
    mensajeError.innerHTML = "La calificación debe ser un número entre 0 y 5.";
  }
});
