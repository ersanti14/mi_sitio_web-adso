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

    let Anaclose = document.querySelector(".containerAna");
    let main_ana = document.querySelector(".anaContainer");
    let campoChat = document.querySelector(".campoAnaClose")
    let closeAna = document.querySelector(".closeAna");

    Anaclose.addEventListener("click", function () {
        main_ana.classList.toggle("ocuAna");
        campoChat.classList.toggle("campoAnaClose");

        main_ana.classList.toggle("containerAna");
        campoChat.classList.toggle("campoAna");

        closeAna.addEventListener.toggle("close");
        closeAna.addEventListener.toggle("closeAna")

    });

    closeAna.addEventListener("click", function () {

        main_ana.classList.toggle("ocuAna");
        campoChat.classList.toggle("campoAnaClose");

        main_ana.classList.toggle("containerAna");
        campoChat.classList.toggle("campoAna");

        closeAna.addEventListener.toggle("close");
        closeAna.addEventListener.toggle("closeAna")
        
        
    });






});
