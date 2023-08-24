document.addEventListener("DOMContentLoaded", function () {

    var lupaClose = document.querySelector(".lupab");
    var close = document.querySelector(".close1");
    var mobileClose = document.querySelector(".mobileClose");
    var textB = document.getElementById("textBus");


    lupaClose.addEventListener("click", function () {

        mobileClose.classList.toggle("mobileClose");
        mobileClose.classList.toggle("mobileBuscar");

        textB.focus();
    });

    close.addEventListener("click", function () {

        mobileClose.classList.toggle("mobileClose");
        mobileClose.classList.toggle("mobileBuscar");
    });

    let contPrincipal = document.getElementById("containerTodo");
    let idAnaContainer = document.getElementById("idAnaContainer");
    let idcampoElemets = document.getElementById("idcampoElemets");
    let iconClose = document.getElementById("iconClose");

    clickAna.addEventListener("click", function () {

        
        if (idcampoElemets.classList.contains("campoElemets")) {
            idcampoElemets.classList.remove("campoElemets");
            idcampoElemets.classList.add("campoAna");
            contPrincipal.classList.remove("containerPricipal")
            contPrincipal.classList.add("containerPricipalClose")
        } else {
            idcampoElemets.classList.add("campoElemets");
            idcampoElemets.classList.remove("campoAna");
            contPrincipal.classList.remove("containerPricipalCLose")
            contPrincipal.classList.add("containerPricipal")
        }
        iconClose.classList.remove("close");
        iconClose.classList.add("closeAna");
        idAnaContainer.classList.add("ocuAna");

    })
    iconClose.addEventListener("click", function () {
        if (idcampoElemets.classList.contains("campoElemets")) {
            idcampoElemets.classList.remove("campoElemets");
            idcampoElemets.classList.add("campoAna");
            contPrincipal.classList.remove("containerPricipal")
            contPrincipal.classList.add("containerPricipalCLose")
        } else {
            idcampoElemets.classList.add("campoElemets");
            idcampoElemets.classList.remove("campoAna");
            contPrincipal.classList.remove("containerPricipalCLose")
            contPrincipal.classList.add("containerPricipal")
        }
        iconClose.classList.add("close");
        iconClose.classList.remove("closeAna");
        idAnaContainer.classList.remove("ocuAna");
    }) 


});
