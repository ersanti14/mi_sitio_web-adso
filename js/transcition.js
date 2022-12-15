let box=document.getElementById("box3");

box.addEventListener("click",function(){
    if(box.classList.contains("box3-old")){
        box.classList.add("box3-new");
        box.classList.remove("box3-old");
    }
    else{
        box3.classList.remove("box3-new");
        box3.classList.add("box3-old")
    }
})
let bot=document.getElementById("bot");

bot.addEventListener("click",function(){
    if(bot.classList.contains("cir")){
        bot.classList.add("cir-on");
        bot.classList.remove("cir-off");
    }
    else{
        bot.classList.remove("cir-on");
        bot.classList.add("cir")
    }
})