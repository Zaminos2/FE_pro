

let mesageWrap;
let mesageContainer;
let mesage;
let closeBtn;
let users = [];

function pageRender(){
    mainWrap.insertAdjacentHTML("afterbegin",`
<form action="" class="authorization">
<button class="closeForm">X</button>
<input type="text" class="login regInput" placeholder="Enter your login">
<input type="email" name="" id="email" class="regInput" placeholder="Enter your email">
<input type="password" class="password regInput" placeholder="Enter your password">
<input type="submit" class="submit " value="submit">
</form>
`)
}
 
pageRender();

const submitBtn = document.querySelector(".submit");
const userLogin = document.querySelector(".login");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector(".password");
const form = document.querySelector(".authorization");

function userRegistration(){

    let user ={
        login: `${userLogin.value}`,
        email: `${userEmail.value}`,
        password: `${userPassword.value}`,
    }
    let registrationMesage = `User ${userLogin.value} sucsesfuly registrated`;
    const registrationError = "Such user alredy exist";
    const hollowInput = "Please fill all inputs";

    users = JSON.parse(localStorage.getItem("users"))||[];
    const isUserEmail = users.find(({email})=>email===user.email);
    const isInputsNull = userLogin.value.trim()===""||userEmail.value.trim()===""||userPassword.value.trim()==="";
    if(isInputsNull){
        createMesage(hollowInput);
        return;
    }
    isUserEmail ? createMesage(registrationError) : (users.push(user), localStorage.setItem("users", JSON.stringify(users)), createMesage(registrationMesage));
}

function createElement(string){
    mesageWrap = document.createElement("div");
    mesageWrap.classList.add("mesageWrap");
    mesageContainer = document.createElement("div");
    mesageContainer.classList.add("mesageContainer");
    mesage = document.createElement("p");
    closeBtn = document.createElement("button");
    closeBtn.classList.add("closeBtn");
    closeBtn.textContent = "X";
    mesage.classList.add("mesageText");
    body.append(mesageWrap);
    body.append(mesageContainer);
    mesageContainer.append(mesage);
    mesage.textContent = string;
    mesageContainer.append(closeBtn);

    

    closeBtn.addEventListener("click",()=>{
        mesageWrap = document.querySelector(".mesageWrap")
        mesageWrap.classList.add("hide");
        mesageContainer.classList.add("hide");
    })
}

function createMesage(string){

    let mesageContainer = document.querySelector(".mesageContainer");
    if(mesageContainer){
        let mesageTextContainer = mesageContainer.querySelector(".mesageText");
        mesageTextContainer.textContent = string;
    }else{
        createElement(string);
    }
}

submitBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    userRegistration();
    if(mesageWrap.classList.contains("hide")&&mesageContainer.classList.contains("hide")){
        mesageWrap.classList.remove("hide");
        mesageContainer.classList.remove("hide");
    }
    form.reset();
    setTimeout(()=>{
        mesageWrap.classList.add("hide");
        mesageContainer.classList.add("hide");
    },5000)

});

