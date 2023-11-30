let valorStar = document.getElementById("valor");

valorStar.addEventListener("submit", function (e) {
  e.preventDefault();

  var numberStar = document.getElementById("starValue").value;
  let boxStar = document.getElementById("boxStar");
  let mensajeError = document.getElementById("mensajeError");

  boxStar.innerHTML = "";
  mensajeError.innerHTML = ""; // Limpiar mensajes de error previos

  numberStar = parseFloat(numberStar);

  if (!isNaN(numberStar) && numberStar >= 0 && numberStar <= 5) {
    // Redondea hacia arriba si el decimal es mayor o igual a 0.7
    let roundedStar = Math.ceil(numberStar);

    // Calcula las estrellas llenas
    let fullStars = Math.floor(roundedStar);

    // Agrega las estrellas llenas
    for (let i = 0; i < fullStars; i++) {
      let calificacionStarLlena = document.createElement("i");
      calificacionStarLlena.setAttribute("class", "ti ti-star-filled");
      boxStar.appendChild(calificacionStarLlena);
    }

    // Agrega la estrella a la mitad si es necesario
    if (roundedStar % 1 !== 0) {
      let calificacionStarMedia = document.createElement("i");
      calificacionStarMedia.setAttribute("class", "ti ti-star-half-filled");
      boxStar.appendChild(calificacionStarMedia);
    }

    // Completa con estrellas vacías
    for (let i = Math.ceil(roundedStar); i < 5; i++) {
      let calificacionStarVacia = document.createElement("i");
      calificacionStarVacia.setAttribute("class", "ti ti-star");
      boxStar.appendChild(calificacionStarVacia);
    }
  } else {
    mensajeError.innerHTML = "La calificación debe ser un número entre 0 y 5.";
  }
});
