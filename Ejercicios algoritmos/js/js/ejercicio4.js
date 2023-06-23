/* Escribe un programa que pregunte el precio, el tanto por ciento de descuento, y te diga el 
precio con descuento. Por ejemplo, si el precio que introduce el usuario es 300 y el 
descuento 20, el programa dirá que el precio final con descuento es de 240. */

function calcular(){

    let precio, descuento 

    precio = document.getElementById("precio").value 
    descuento = document.getElementById("descuento").value 

    total = precio-(precio*descuento)/100

    print = document.getElementById("respuesta")
    print.innerHTML = "El precio de su compra aplicando el descuento es de " + total;
}