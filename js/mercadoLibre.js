class Automovil {
    constructor(marca, modelo, precio, anyo, kilometros, ciudad) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometros = kilometros
        this.ciudad = ciudad


    }
}
let auto1 = new Automovil("Mazda", "Cx5", 190000000, "2021", 800000, "Pitalito - Huila")
let marcaAutomovil = auto1.marca;

let inputBusqueda = document.getElementById('inputBusqueda')

inputBusqueda.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        /* alert(auto1.marca+" "+auto1.modelo) */
        let mainContent = document.getElementById("mainContent")
        //contenedor para el vehiculo
        let boxAuto = document.createElement("div")
        mainContent.appendChild(boxAuto)
        boxAuto.setAttribute("class", "box-auto")

        //cpmtenedor imagen
        let boxImg = document.createElement("div")
        boxAuto.appendChild(boxImg)
        

        //corazon
        let boxCorazon = document.createElement("div")
        boxImg.appendChild(boxCorazon)
        boxCorazon.setAttribute("class", "box-corazon")
        let corazon = document.createElement("div")
        boxCorazon.appendChild(corazon)
        corazon.setAttribute("class", "corazon")


        iconHearth = document.createElement("i")
        corazon.appendChild(iconHearth)
        iconHearth.setAttribute("class", "heart ti ti-heart")
let imgAuto = document.createElement("img")
        boxImg.appendChild(imgAuto)
        boxImg.setAttribute("class", "box-img")
        imgAuto.setAttribute("src", "imagenes/NAZ_1aa72f00dcda4f7ab52541f7409958b5.jpg")
        imgAuto.setAttribute("class", "img-auto")


        //crear contenedor para la informacion
        let boxInfo = document.createElement("div")
        boxAuto.appendChild(boxInfo)
        let infoMarca = document.createElement("div")
        boxInfo.appendChild(infoMarca)
        boxInfo.setAttribute("class", "box-info")
        infoMarca.setAttribute("class", "info-marca")
        let txtMarca = document.createElement("label")
        infoMarca.appendChild(txtMarca)
        txtMarca.innerText = auto1.marca
        txtMarca.setAttribute("class", "txt-marca")

        let txtModelo = document.createElement("label");
        infoMarca.appendChild(txtModelo)
        txtModelo.innerText = " " + auto1.modelo;
        txtModelo.setAttribute("class", "txt-modelo")


        let precioFormant = new Intl.NumberFormat("de-DE").format(auto1.precio)
        let txtPrecio = document.createElement("label")
        boxInfo.appendChild(txtPrecio)
        txtPrecio.innerText = precioFormant
        txtPrecio.setAttribute("class", "txt-precio")



        let boxProcedencia = document.createElement("div")
        boxInfo.appendChild(boxProcedencia)


        let txtAnyo = document.createElement("label")
        boxProcedencia.appendChild(txtAnyo)
        txtAnyo.innerHTML = auto1.anyo + " · "



        let txtKilometrosFormant = new Intl.NumberFormat("de-DE").format(auto1.Kilometros)
        let txtKilometros = document.createElement("label")
        boxProcedencia.appendChild(txtKilometros)
        txtKilometros.innerText = txtKilometrosFormant + " · "

        let txtCiudadad = document.createElement("label")
        boxProcedencia.appendChild(txtCiudadad)
        txtCiudadad.innerHTML = auto1.ciudad

    }
});