

let mesageWrap;
let mesageContainer;
let mesage;
let closeBtn;
let buttonContainer;
let choiseBtn;
let xButton;

let users = [];
const buttons = ["Оплатить","Отправить","Принять","Завершить заказ"];

function pageRender(){
    mainWrap.insertAdjacentHTML("afterbegin",`
<form action="" class="authorization">
<button class="closeForm" id="closeForm">X</button>
<input type="email" name="" id="email" class="regInput" placeholder="Enter your email">
<input type="password" class="password regInput" placeholder="Enter your password">
<input type="submit" class="submit" id="authorizationSubmit" value="submit">
</form>
`)
}
 
pageRender();

const submitBtn = document.querySelector("#authorizationSubmit");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector(".password");
const form = document.querySelector(".authorization");
const loader = document.querySelector(".loader");
const payMessage = "Order payed";
const sendMessage = "Order sended";
const aceptMessage = "Order acepted";

function userCheck(){
    users = JSON.parse(localStorage.getItem("users"));
    let isUserExist = false;
    for (let user of users) {
        if(user.email === userEmail.value && user.password === userPassword.value){
            isUserExist =true;
            break;
        }
    }
    const correctUser = `User sucsesfuly authorized`;
    const incorrectUser = "No such user"
    const hollowInput = "Please fill all inputs";
    const isInputsNull = userEmail.value.trim()===""||userPassword.value.trim()==="";
    if(isInputsNull){
        createMesage(hollowInput);
        setTimeout(()=>{
            mesageWrap.classList.add("hide");
            mesageContainer.classList.add("hide");
        },5000)
    
        return;
    }
    isUserExist?(createMesage(correctUser),findeOrder()):createMesage(incorrectUser),
        setTimeout(()=>{
        mesageWrap.classList.add("hide");
        mesageContainer.classList.add("hide");
    },5000)
;
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
let adres;
let price;
let cost;
let order;
let payButton;
let sendButton;
let aceptButton;
let finishButton;
let articleTitle;
let orderForm;

 function createButtons(){
    if(orderForm){
    if(orderForm.classList.contains("hide")){
        orderForm.classList.remove("hide");
    }
}else{
buttonContainer = document.createElement("div");
buttonContainer.classList.add("buttonContainer");

buttonContainer.insertAdjacentHTML("afterbegin",`
<form action="" class="orderForm">
<button class="closeOrder">X</button>
<input type="text" name="" id="adress" class="regInput" placeholder="adres">
<input type="text" class="price regInput" placeholder="price">
<input type="text" class="cost regInput" placeholder="cost">
<input type="submit" class="submit order" value="submit">
</form>
`)

buttons.forEach((button,i)=>{
    choiseBtn = document.createElement("button");
    choiseBtn.classList.add("choiseBtn");
    choiseBtn.classList.add(`button${i}`);
    choiseBtn.classList.add("hide");
    choiseBtn.textContent = `${button}`;
    buttonContainer.append(choiseBtn)
})
mainWrap.append(buttonContainer);
}
}
function findeOrder(){
    createButtons();
    order = document.querySelector(".order");
    adres = document.querySelector("#adress");
    price = document.querySelector(".price");
    cost = document.querySelector(".cost");
    payButton = document.querySelector(".button0");
    sendButton = document.querySelector(".button1");
    aceptButton = document.querySelector(".button2");
    finishButton = document.querySelector(".button3");
    orderForm = document.querySelector(".orderForm")

    order.addEventListener("click",(event)=>{
        event.preventDefault();
        getOrderData();
        setToServer();
        payButton.classList.remove("hide");
        if(mesageWrap.classList.contains("hide")&&mesageContainer.classList.contains("hide")){
            mesageWrap.classList.remove("hide");
            mesageContainer.classList.remove("hide");
            setTimeout(()=>{
                mesageWrap.classList.add("hide");
                mesageContainer.classList.add("hide");
            },5000)
        }
        form.reset();
    });
    payButton.addEventListener("click",(event)=>{
        event.preventDefault();
        payButton.classList.add("hide");
        sendButton.classList.remove("hide");
        getFromServer(1,payMessage);
        if(mesageWrap.classList.contains("hide")&&mesageContainer.classList.contains("hide")){
            mesageWrap.classList.remove("hide");
            mesageContainer.classList.remove("hide");
            setTimeout(()=>{
                mesageWrap.classList.add("hide");
                mesageContainer.classList.add("hide");
            },5000)
        }
    });
    sendButton.addEventListener("click",(event)=>{
        event.preventDefault();
        sendButton.classList.add("hide");
        aceptButton.classList.remove("hide");
        getFromServer(2,sendMessage);
        if(mesageWrap.classList.contains("hide")&&mesageContainer.classList.contains("hide")){
            mesageWrap.classList.remove("hide");
            mesageContainer.classList.remove("hide");
            setTimeout(()=>{
                mesageWrap.classList.add("hide");
                mesageContainer.classList.add("hide");
            },5000)
        }
    });
    aceptButton.addEventListener("click",(event)=>{
        event.preventDefault();
        aceptButton.classList.add("hide");
        finishButton.classList.remove("hide");
        getFromServer(3,aceptMessage);
        if(mesageWrap.classList.contains("hide")&&mesageContainer.classList.contains("hide")){
            mesageWrap.classList.remove("hide");
            mesageContainer.classList.remove("hide");
            setTimeout(()=>{
                mesageWrap.classList.add("hide");
                mesageContainer.classList.add("hide");
            },5000)
        }
    });
    finishButton.addEventListener("click",()=>{
        orderForm.classList.add("hide");
        finishButton.classList.add("hide");
    })
}

function getOrderData(){
    const hollowInput = "Please fill all inputs";
    const isInputsNull = adres.value.trim()===""||price.value.trim()===""||cost.value.trim()==="";
    if(isInputsNull){
        createMesage(hollowInput);
        setTimeout(()=>{
            mesageWrap.classList.add("hide");
            mesageContainer.classList.add("hide");
        },5000)
        return null;
    }
    const data = {
        adres: adres.value,
        price: price.value,
        cost: cost.value
    }
    return data;
}

const dataSend = "Data sucsesfuly sended";

async function setToServer(){
    await fetch (`https://jsonplaceholder.typicode.com/users`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(getOrderData())
    }).then(response=>{
        if(response.ok){
            mesage.textContent = dataSend;
        }
    }).catch(error=>console.error(`Error`,error));
};
async function getFromServer(ind,text){
    try {
        loader.classList.remove("hide");
    
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ind}`);
        const { title } = await response.json();
    
        if (articleTitle) {
          articleTitle.textContent = title;
          mesage.textContent = text;
        } else {
          const articleTitle = document.createElement("p");
          articleTitle.id = "serverTitle";
          mesageContainer.append(articleTitle);
          articleTitle.textContent = title;
          mesage.textContent = text;
        }
    
        loader.classList.add("hide");
      } catch (error) {
        console.error("Error:", error);
      }
    };

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
    userCheck();
    if(mesageWrap.classList.contains("hide")&&mesageContainer.classList.contains("hide")){
        mesageWrap.classList.remove("hide");
        mesageContainer.classList.remove("hide");
    }
    form.reset();

});

