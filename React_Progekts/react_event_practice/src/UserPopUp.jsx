import userForm from "./styles/userForm.module.css"

function UserPopUp({userName,userEmail,onClose}){
    return(
    <div className={userForm.popUpWrap}>
        <div className={userForm.popUp}>
            <h3>Зарегистрирован пользователь</h3>
            <p>{userName}</p>
            <p>{userEmail}</p>
            <button onClick={onClose} className={userForm.closeButton}>X</button>
        </div>
    </div>)
}
export default UserPopUp;