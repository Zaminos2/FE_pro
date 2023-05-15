let switchButtons = document.getElementsByClassName("readMore");
let fullWindows = document.getElementsByClassName("deliverytext");
let cataloggsBtn = document.querySelector("#ourCatalogs");
let div1 = document.getElementById("desctop");
let div2 = document.getElementById("mobile")

for (let i = 0; i < switchButtons.length; i++) {
  switchButtons[i].addEventListener("click", function(){
    fullWindows[i].classList.toggle("deliverytext2");
  });
}
cataloggsBtn.addEventListener("click", function(){
    location.href = 'http://htmlbook.ru/html/select';
});

