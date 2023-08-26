import registrationForm from "./styles/registratioForm.module.css"
import { useEffect, useState } from "react";
import {useForm} from "react-hook-form";
function RegistrationForm(){
    const {
        register,
        handleSubmit,
        formState:{errors}
      } = useForm();
      const serverUrl = 'https://jsonplaceholder.typicode.com/todos/'
    
      const [userData,SetUserdata]= useState({});
      const [isChecked,setIsChecked] = useState(false);
    
      const nameValidation = 
        {
          required:{
            value: "please use correct symbols",
            patern: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm
          }
        }
      
      const emailValidation = 
        {
          required:{
            value: "please use correct symbols",
            patern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
          }
        }
      
      const passwordvalidation = 
        {
          required:{
            value: "please use correct symbols",
            patern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
          }
        }   
      const onCheckbox = (event)=>{
        setIsChecked(event.target.checked);
      }
      useEffect(()=>{
          if (Object.keys(userData).length > 0) {
            sendToServer(serverUrl, userData);
      }},[userData])
      
      function sendToServer(url,data){
        try{
          fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
          });  
        }catch(error){
          console.log("Error",error);
        }
      }
      function useSubmit(data){
        SetUserdata(data)
        console.log(data);
      }
     
    
      return   (
        <div className={registrationForm.formWrap} >
          <form onSubmit={handleSubmit(useSubmit)} className={registrationForm.regForm}>
            <label htmlFor="first_name">Name</label>
            <input  className="nameinput"{...register("first_name",nameValidation)}></input>
            <label htmlFor="last_name">Last name</label>
            <input  className="nameinput"{...register("last_name",nameValidation)}></input>
            <input className="nameInput"{...register("email",emailValidation)} type="email" placeholder="email"></input>
            <input className="nameInput"{...register("password",passwordvalidation)}type="password" placeholder="pasword"></input>
            <label htmlFor="checkbox">I agree for anything</label>
            <input type="checkbox" onChange={onCheckbox} ></input>
            <input type="submit" value="Submit" disabled={!isChecked}></input>
          </form>
        </div>
      )
    
}
export default RegistrationForm;