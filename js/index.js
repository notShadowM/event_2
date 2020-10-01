// Here you can access the colors variable
// have fun
// import {colors} from './colors.js';




let randomColor = document.querySelector("body > div > div > div.control > button");

let textColor = document.querySelector("#color");

let paint = document.getElementById("pallete");

randomColor.addEventListener("click" ,event =>{
    let number = Math.floor(Math.random()*colors.length);
    paint.style.backgroundColor = colors[number];
    textColor.value = colors[number];
    textColor.style.color = colors[number];
})

textColor.addEventListener("change" , input)

function input(e){
    let hex = e.target.value;
    paint.style.backgroundColor = hex;
    textColor.style.color = hex;
}


