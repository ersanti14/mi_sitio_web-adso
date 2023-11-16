let valorStar = document.getElementById("valor");

valorStar.addEventListener("submit", function (e) {
  e.preventDefault();

  var numberStar = document.getElementById("starValue").value;
  let boxStar = document.getElementById("boxStar");

  // Limpiar el contenido anterior de boxStar
  boxStar.innerHTML = "";

  // Convertir el valor a un número entero
  numberStar = parseInt(numberStar);

  // Asegurarse de que el valor esté entre 1 y 5
  if (numberStar >= 1 && numberStar <= 5) {
    for (let i = 0; i < numberStar; i++) {

      let calificacionStarLlena = document.createElement("i");
      
      calificacionStarLlena.setAttribute("class", "ti ti-star-filled");
      boxStar.appendChild(calificacionStarLlena);
    }

    for (let i = numberStar; i < 5; i++) {
      let calificacionStarVacia = document.createElement("i");
      calificacionStarVacia.setAttribute("class", "ti ti-star");
      boxStar.appendChild(calificacionStarVacia);
    }
  }
});

