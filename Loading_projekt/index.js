const mainWrap = document.querySelector(".mainWrap");
const body = document.querySelector("body");

mainWrap.insertAdjacentHTML("afterbegin",`        
<div class="choiseWrap">
<button class="sighnUp choiseBtn">SighnUp</button>;
<button class="login choiseBtn">Login</button>;
</div>
`)

const choiseWrap = document.querySelector(".choiseWrap");
const sighnUp = document.querySelector(".sighnUp");
const login = document.querySelector(".login");


 
sighnUp.addEventListener("click",()=>{
 choiseWrap.classList.add("hide");
 const regScript = document.createElement("script");
 regScript.src ="./scripts/sighnUp.js";
 body.append(regScript);
 
});
login.addEventListener("click",()=>{
    choiseWrap.classList.add("hide");
    const regScript = document.createElement("script");
    regScript.src ="./scripts/authorization.js";
    body.append(regScript);
});

