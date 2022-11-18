let barMenu = document.getElementById("barMenu");
let main_Menu = document.getElementById("main_Menu") 

main_Menu.addEventListener("click", function() {
    if (main_Menu.classList.contains("main-menu")){
        main_Menu.classList.add("menu-1");
        main_Menu.classList.remove("main-menu");
    }
        else{
            main_Menu.classList.remove("menu-1");
            main_Menu.classList.add("main-menu");
        }
        

    }
});