/* function obtenerFecha() {
    var fecha = document.getElementById("fechaInput").value;

    console.log("Fecha seleccionada: " + fecha);

    alert(fecha);
}  */

function validarFecha() {
    var fechaInput = document.getElementById("fechaInput").value;
    var fechaEstipulada = "2023-06-30";


    var fechaSeleccionada = new Date(fechaInput);
    var fechaLimite = new Date(fechaEstipulada);

    if (fechaSeleccionada < fechaLimite) {
    alert("Archivo enviado en fechas estipuladas.");

    
    } else {
    alert("La fecha limite ya a pasado :(");

    }
}
