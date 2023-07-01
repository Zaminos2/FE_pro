const nameInput = document.querySelector(".userName");
const lastNameInput = document.querySelector(".userLastName");
const phoneInput = document.querySelector(".phoneNumber");
const adresInput = document.querySelector(".adres");
const studentCheck = document.querySelector("#student");
const mentorCheck = document.querySelector("#mentor");
const submitBtn = document.querySelector(".submitBtn");
const form = document.querySelector("form");
const url = "https://jsonplaceholder.typicode.com/users"

async function setData (){
    const userData = {
        userName: nameInput.value,
        userLastName: lastNameInput.value,
        phone: phoneInput.value,
        adres: adresInput.value
    }

    if(studentCheck.checked){
        userData.position = "Student";
    }else if(mentorCheck.checked){
        userData.position = "Mentor";
    }else if(mentorCheck.checked && studentCheck.checked){
        userData.position1 = "Mentor";
        userData.position2 = "Student";
    }
    
   await fetch(url,{
        method: "POST",
        headers:{
        'Content-Type':'application/json'
         },
         body: JSON.stringify(userData)
    }).catch((err)=>{
        throw err = new Error;
    })

  
}

form.addEventListener("submit",(event) => {
 event.preventDefault();
    setData();
})