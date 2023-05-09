let sliderInner = document.querySelector(".slider--"); 

let images = sliderInner.querySelectorAll("img");

let index = 0;
    
setInterval(function(){
let percetage = index * -55;

    sliderInner.style.transform ="translateX("+ percetage +"%)";
    if (index > images.length -1 ){
        index=0;
    }
    index++;

},1000);
