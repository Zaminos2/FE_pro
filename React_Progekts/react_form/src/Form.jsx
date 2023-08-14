import { useState } from "react";

function Form(){
    const [userData,setUserData]= useState({
        nickname:"",
        email:"",
        password:"",
        aboutText:""
    })
    const [otherArray, setOtherArray] = useState([]);
    const [localStorageData, setLocalStorageData] = useState(
        JSON.parse(localStorage.getItem("data")) || []
      );
    function hendleChanges(event) {
        const fieldName = event.target.name;
        const value = event.target.value;

        setUserData((prevUserData) => ({
            ...prevUserData,
            [fieldName]: value, 
        }));
    }
    function submitForm() {
        const newObject = { ...userData };
    
        setLocalStorageData((prevData) => {
            const updatedData = [...prevData, newObject];
            localStorage.setItem("data", JSON.stringify(updatedData));
            return updatedData;
        });
    
        setOtherArray((prevArray) => [...prevArray, newObject]);
    
        setUserData({
            nickname: "",
            email: "",
            password: "",
            aboutText: "",
        });
        HTMLFormElement.reset();
    }
    console.log(userData);
    console.log(otherArray);
    return (
        <div className="formwrap">
            <div className="form">
                <input type="text" placeholder="entep your Nickname" name="nickname" onChange={hendleChanges}/>
                <input type="email" placeholder="enter your email" name="email" onChange={hendleChanges}/>
                <input type="password" placeholder="enter your password" name="password" onChange={hendleChanges}/>
                <textarea placeholder="tell about yourself" name="aboutText" onChange={hendleChanges}></textarea>
                <input type="submit" onClick={submitForm}/>
            </div>
        </div>
    )
}
export default Form;