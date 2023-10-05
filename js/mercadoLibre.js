class Automovil {
    constructor(marca, modelo){
        this.marca =marca;
        this.modelo =modelo;
    }
}
let auto1 = new Automovil("mazda","Cx5")
let marcaAutomovil = auto1.marca;

let inputBusqueda = document.getElementById('inputBusqueda')


inputBusqueda.addEventListener("keydown", function(event){
    if (event.key == "Enter") {
        
    /* alert(auto1.marca+" "+auto1.modelo) */
    let mainContent  = document.getElementById("mainContent")
    //contenedor para el vehiculo
    let boxAuto = document.createElement("div")
    mainContent.appendChild(boxAuto)
    boxAuto.setAttribute("class", "box-auto")


    //crear contenedor para la informacion
    let boxInfo = document.createElement("div")
    boxAuto.appendChild(boxInfo)
    let txtMarca = document.createElement("label")
    boxInfo.appendChild(txtMarca)
    boxInfo.setAttribute("class", "box-info")

    txtMarca.innerText = auto1.marca

    let txtModelo = document.createElement("label");
    boxInfo.appendChild(txtModelo)
    txtModelo.innerText = " " + auto1.modelo;

    

}
});