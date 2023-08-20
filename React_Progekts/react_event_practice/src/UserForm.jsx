import { useState } from "react";
import UserPopUp from "./UserPopUp";
import userForm from "./styles/userForm.module.css"

function UserForm() {
  const [userData, setUserData] = useState({});
  const [visible, setVisible] = useState(false);
  function handleUserData(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setUserData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userData);
    if (!userData.NickName || !userData.email || !userData.password) {
      alert("please enter all fields!");
      return;
    }
    const usersList = JSON.parse(localStorage.getItem("users")) || [];
    const isExist = usersList.find((u) => u.email.toLowerCase() === userData.email.toLowerCase());
    if (isExist) {
      alert("This user alredy registrated!");
      return;
    }

    usersList.push(userData);
    localStorage.setItem("users", JSON.stringify(usersList));
    openPopUp();
    
  }

  function openPopUp() {
    setVisible(true);
  }

  function closePopUp() {
    setVisible(false);
  }

  // function handleEnterClick(event){
  //     if(event.key === "Enter"){
  //         handleSubmit();
  //     }
  // }

  return (
    <div className={userForm.formWrapp}>
      <form className={userForm.form}>
        <input type="text" name="NickName" onChange={handleUserData} placeholder="enter NickName"></input>
        <input type="email" name="email" onChange={handleUserData} placeholder="enterEmail"></input>
        <input
          type="password"
          name="password"
          onChange={handleUserData}
          placeholder="enter password"
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      { visible &&(<UserPopUp 
      userName={userData.NickName}
      userEmail={userData.email}
      onClose = {closePopUp}
      />) }
    </div>
  );
}

export default UserForm;
