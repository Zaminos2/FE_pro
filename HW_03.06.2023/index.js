let elType = document.querySelector("#typeInput");
let elClass = document.querySelector("#classInput");
let elWidth = document.querySelector("#widthStyle");
let elHight = document.querySelector("#hightStyle");
let elColor = document.querySelector("#colorStyle");
let newEl;

function elCreation(){
   
    newEl = document.createElement(elType.value);
    newEl.classList.add(elClass.value);

    const parrentEl = document.querySelector(".result");
    parrentEl.appendChild(newEl);
}

function elStilization(){

    if(newEl.tagName === "DIV"){
        newEl.style.backgroundColor = elColor.value;
        newEl.style.width = elWidth.value;
        newEl.style.height = elHight.value;    
    }else{
        newEl.style.color = elColor.value;
        newEl.style.width = elWidth.value;
        newEl.style.height = elHight.value;    
    };
}