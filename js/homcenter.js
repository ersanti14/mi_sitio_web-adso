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



    let idcampoElemets = document.getElementById("idcampoElemets");
    let iconClose = document.getElementById("iconClose");

    clickAna.addEventListener("click", function () {
        if (idcampoElemets.classList.contains("campoElemets")) {
            idcampoElemets.classList.remove("campoElemets");
            idcampoElemets.classList.add("campoAna");
        } else {
            idcampoElemets.classList.add("campoElemets");
            idcampoElemets.classList.remove("campoAna");
        }
        iconClose.classList.remove("close");
        iconClose.classList.add("closeAna");
        idAnaContainer.classList.add("ocuAna");
    })
    iconClose.addEventListener("click", function () {
        if (idcampoElemets.classList.contains("campoElemets")) {
            idcampoElemets.classList.remove("campoElemets");
            idcampoElemets.classList.add("campoAna");

        } else {
            idcampoElemets.classList.add("campoElemets");
            idcampoElemets.classList.remove("campoAna");

        }
        iconClose.classList.add("close");
        iconClose.classList.remove("closeAna");
        idAnaContainer.classList.remove("ocuAna");
    })


});
