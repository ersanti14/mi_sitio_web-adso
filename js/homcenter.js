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

    var Anaclose = document.querySelector(".containerAna");
    var main_ana = document.querySelector(".anaContainer");
    var campoChat = document.querySelector(".campoAnaClose")

    Anaclose.addEventListener("click", function () {
        main_ana.classList.toggle("ocuAna");
        campoChat.classList.toggle("campoAnaClose");

        // Cambia las clases "containerAna" y "campoAna" al mismo tiempo
        main_ana.classList.toggle("containerAna");
        campoChat.classList.toggle("campoAna");
    });






});
