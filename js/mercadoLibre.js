/* class Automovil {
    constructor(marca, modelo, precio, anyo, kilometro , ciudad) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometro = kilometro;
        this.ciudad = ciudad;


    }
}
let auto1 = new Automovil("Chevrolet", "Camaro", 190000000, "2021", 80000, "Pitalito - Huila")
let marcaAutomovil = auto1.marca;

let inputBusqueda = document.getElementById('inputBusqueda')

inputBusqueda.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
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



        let txtKilometrosFormant = new Intl.NumberFormat("de-DE").format(auto1.kilometro)
        let txtKilometros = document.createElement("label")
        boxProcedencia.appendChild(txtKilometros)
        txtKilometros.innerHTML = txtKilometrosFormant + " · "
    

        let txtCiudadad = document.createElement("label")
        boxProcedencia.appendChild(txtCiudadad)
        txtCiudadad.innerHTML = auto1.ciudad

    }
}); */

class Automovil {
    constructor(marca, modelo, precio, anyo, kilometro, ciudad, img) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometro = kilometro;
        this.ciudad = ciudad;
        this.img = img
    }
}

// Crear objetos para diferentes automóviles
let autos = [
    new Automovil("Chevrolet", "Camaro", 190000000, "2021", 80000, "Pitalito - Huila","imagenes/NAZ_1aa72f00dcda4f7ab52541f7409958b5.jpg"),
    new Automovil("Mazda", "MX-5", 120000000, "2022", 2000, "Cali","imagenes/mazda-mx-5-2022-d.webp"),
    new Automovil("Toyota", "Tacoma", 350000000, "2021", 15000, "Medellin","imagenes/20210602-TOYOTA-TACOMA-TRAIL-EDITION-01-01-750x518.jpg"),
    new Automovil("Audi", "R8", 800000000, "2023", 5000, "Cartagena","imagenes/R8.jpg")
];

let inputBusqueda = document.getElementById('inputBusqueda')

inputBusqueda.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        let mainContent = document.getElementById("mainContent");
        mainContent.innerHTML = ''; // Limpia el contenido anterior

        autos.forEach((autos, index) => {
            // Crea elementos HTML para mostrar el automóvil
            let boxAuto = document.createElement("div");
            mainContent.appendChild(boxAuto);
            boxAuto.setAttribute("class", "box-auto");

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
            imgAuto.setAttribute("src", (autos.img))
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
            txtMarca.innerText = autos.marca
            txtMarca.setAttribute("class", "txt-marca")

            let txtModelo = document.createElement("label");
            infoMarca.appendChild(txtModelo)
            txtModelo.innerText = " " + autos.modelo;
            txtModelo.setAttribute("class", "txt-modelo")


            let precioFormant = new Intl.NumberFormat("de-DE").format(autos.precio)
            let txtPrecio = document.createElement("label")
            boxInfo.appendChild(txtPrecio)
            txtPrecio.innerText = precioFormant
            txtPrecio.setAttribute("class", "txt-precio")



            let boxProcedencia = document.createElement("div")
            boxInfo.appendChild(boxProcedencia)


            let txtAnyo = document.createElement("label")
            boxProcedencia.appendChild(txtAnyo)
            txtAnyo.innerHTML = autos.anyo + " · "



            let txtKilometrosFormant = new Intl.NumberFormat("de-DE").format(autos.kilometro)
            let txtKilometros = document.createElement("label")
            boxProcedencia.appendChild(txtKilometros)
            txtKilometros.innerHTML = txtKilometrosFormant + "km · "


            let txtCiudadad = document.createElement("label")
            boxProcedencia.appendChild(txtCiudadad)
            txtCiudadad.innerHTML = autos.ciudad

        });
    }
});