/* let imgBox = document.getElementById("imgBox");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");

imgMini1.addEventListener("click",function() {
    imgBox.setAttribute("src","imagenes/img-mini-1.jpg");
    imgMini1.classList.add("img-mini-act");
    imgMini2.classList.remove("img-mini-act");
    imgMini3.classList.remove("img-mini-act");
    imgMini4.classList.remove("img-mini-act");

    imgMini1.classList.add("box-img-mini");
    imgMini2.classList.remove("box-img-mini");
    imgMini3.classList.remove("box-img-mini");
    imgMini4.classList.remove("box-img-mini");
});
imgMini2.addEventListener("click",function() {
    imgBox.setAttribute("src","imagenes/img-mini-2.jpg");
    imgMini2.classList.add("img-mini-act");
    imgMini1.classList.remove("img-mini-act");
    imgMini3.classList.remove("img-mini-act");
    imgMini4.classList.remove("img-mini-act");

    imgMini2.classList.add("box-img-mini");
    imgMini1.classList.remove("box-img-mini");
    imgMini3.classList.remove("box-img-mini");
    imgMini4.classList.remove("box-img-mini");
    
});
imgMini3.addEventListener("click",function() {
    imgBox.setAttribute("src","imagenes/img-mini-3.jpg");
    imgMini3.classList.add("img-mini-act");
    imgMini1.classList.remove("img-mini-act");
    imgMini2.classList.remove("img-mini-act");
    imgMini4.classList.remove("img-mini-act");
    
    imgMini3.classList.add("box-img-mini");
    imgMini1.classList.remove("box-img-mini");
    imgMini2.classList.remove("box-img-mini");
    imgMini4.classList.remove("box-img-mini");
});
imgMini4.addEventListener("click",function() {
    imgBox.setAttribute("src","imagenes/img-mini-4.jpg");
    imgMini4.classList.add("img-mini-act");
    imgMini1.classList.remove("img-mini-act");
    imgMini2.classList.remove("img-mini-act");
    imgMini3.classList.remove("img-mini-act");

    imgMini4.classList.add("box-img-mini");
    imgMini1.classList.remove("box-img-mini");
    imgMini2.classList.remove("box-img-mini");
    imgMini3.classList.remove("box-img-mini");
}); */
/// codigo super resumido de gpt
let imgBox = document.getElementById("imgBox");
let imgMinis = document.querySelectorAll(".img-mini");

for (let i = 0; i < imgMinis.length; i++) {
    imgMinis[i].addEventListener("click", function () {
        imgBox.setAttribute("src", `imagenes/img-mini-${i + 1}.jpg`);

        for (let j = 0; j < imgMinis.length; j++) {
            if (j === i) {
                imgMinis[j].classList.add("img-mini-act", "box-img-mini");
            } else {
                imgMinis[j].classList.remove("img-mini-act", "box-img-mini");
            }
        }
    });
}

//fondo ocuro mio 
let boDy = document.getElementById("boDy")
imgBox.addEventListener("click",function(){
    boDy.classList.add("fondo")
})
//fondo oscuro
let btnAtras = document.getElementById("btnAtras")
let lightBox = document.getElementById("lightBox");
imgBox.addEventListener("click", function () {
    lightBox.classList.remove("light-hidden");
});

btnAtras.addEventListener("click", function () {
    lightBox.classList.add("light-hidden")
})


//parte 2 codigo resumido gpt

/* let numElem = document.getElementById("numElem");
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");

btnSuma.addEventListener("click", function() {
  numElem.textContent = parseInt(numElem.textContent) + 1;
});

btnResta.addEventListener("click", function() {
  let currentNum = parseInt(numElem.textContent);
  if (currentNum > 0) {
    numElem.textContent = currentNum - 1;
  }
}); */

//codigo mio sin resumir 

let btnResta = document.getElementById("btnResta");
let btnSuma = document.getElementById("btnSuma");
let cantBox = document.getElementById("cantBox");
let btnCant = document.getElementById("btnCant");
let numElem = document.getElementById("numElem");
let numElemTxt = document.getElementById("numElem").innerHTML;


let valorUnitario = 199999
let valorUnitarioTxt = valorUnitario.toString();

let valorUnitarioPeso = new Intl.NumberFormat().format(valorUnitarioTxt);

let cantNumTotal = valorUnitarioTxt.length;

let valorTotal = document.getElementById("valorTotal");
let valorTotalInt = 0;



btnSuma.addEventListener("click", function () {
    let numElemTxt = document.getElementById("numElem").innerHTML;
    let numElemInt = parseInt(numElemTxt);
    if (numElemInt < 20) {
        let totalElemInt = numElemInt + 1;
        let totalElemtxt = totalElemInt.toString();
        numElem.innerHTML = totalElemtxt;

        valorTotalInt = valorUnitario * totalElemtxt;
        valorTotal.innerHTML = "$" + new Intl.NumberFormat().format(valorTotalInt);

    }

});

btnResta.addEventListener("click", function () {
    let numElemTxt = document.getElementById("numElem").innerHTML;
    let numElemInt = parseInt(numElemTxt);
    if (numElemInt > 0) {
        let totalElemInt = numElemInt - 1;
        let totalElemtxt = totalElemInt.toString();
        numElem.innerHTML = totalElemtxt;
        
        valorTotalInt = valorUnitario * totalElemInt;
        valorTotal.innerHTML = "$" + new Intl.NumberFormat().format(valorTotalInt);
        
    }
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