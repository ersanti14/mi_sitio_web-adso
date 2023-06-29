console.log("Validacion fechas");

console.log("Fecha y hora");

let timeGMT = new Date();
console.log(timeGMT);

console.log("Fecha y hora to string");

let timeGMTStr = timeGMT.toString();

console.log(timeGMTStr);

console.log("Obtener dia de la semana")

let timeGMTDay = timeGMT.getDay();

let diaSemana =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
console.log("hoy es: " + diaSemana[timeGMTDay]);

let timeGMTmes = timeGMT.getMonth();

let mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

console.log("Estamos a: " + mes[timeGMTmes]);

console.log("fecha y hora desfragmentada")

let currentTime = new Date();

console.log("dia de la semana " + currentTime.getDay());

console.log("mes del año " + currentTime.getMonth());

console.log("dia del mes " +currentTime.getDate());

console.log("Año " + currentTime.getFullYear());

console.log("Hora " + currentTime.getHours());

console.log("Minutos " + currentTime.getMinutes());

console.log("segundos " + currentTime.getSeconds());

console.log("Milisegundos " + currentTime.getMilliseconds());

console.log("==milisegundos transcurridos desde 01/01/1970==");
console.log(currentTime.getTime());

console.log("estableciendo diferencia de fechas");

let newYear2024 = new Date("January 1, 2024");

let fechaActual = new Date();

let newYear2024ms = newYear2024.getTime();

let fechaActualms = fechaActual.getTime()

console.log(newYear2024ms);
console.log(fechaActualms);

let milisegDiff = newYear2024ms - fechaActualms;
let diasDiff = milisegDiff / (1000 * 60 * 60 *24);

console.log("dias faltantes para el año nuevo: " + diasDiff);
console.log("dias faltantes para el año nuevo: " + Math.floor(diasDiff));


console.log("ingresar fecha y hora")
let fechaHora = new Date("July 2, 2023 08:00:00");
let fechaHorams = fechaHora.getTime();

let fechaDifVot = fechaHorams - fechaActualms;

console.log("segunados fantaltes; " + fechaDifVot / 1000);
console.log("minutos fantaltes; " + fechaDifVot / (1000 * 60));
console.log("horas fantantes " + fechaDifVot / (1000 * 60 * 60));
console.log("Dias Faltantes " + fechaDifVot / (1000 * 60 * 60 * 24));

calculartiempoVotaciones();

function calculartiempoVotaciones() {
    let horasrestantes = fechaDifVot / (100 * 60 * 60)
}