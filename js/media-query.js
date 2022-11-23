<<<<<<< HEAD
let barMenu = document.getElementById("barMenu");
let main_Menu = document.getElementById("mainMenu"); 

barMenu.addEventListener("click", function() {
    if (main_Menu.classList.contains("main-menu")){
        main_Menu.classList.add("main-menu-visible");
        main_Menu.classList.remove("main-menu");
    }
        else{
            main_Menu.classList.remove("main-menu-visible");
            main_Menu.classList.add("main-menu");
        }
        

=======
let barMenu = document.getElementById("barMenu");
let main_Menu = document.getElementById("mainMenu"); 

barMenu.addEventListener("click", function() {
    if (main_Menu.classList.contains("main-menu")){
        main_Menu.classList.add("main-menu-visible");
        main_Menu.classList.remove("main-menu");
    }
        else{
            main_Menu.classList.remove("main-menu-visible");
            main_Menu.classList.add("main-menu");
        }
        

>>>>>>> 9dbdcf1ce41b4890169157097bb2fb270db16968
    });