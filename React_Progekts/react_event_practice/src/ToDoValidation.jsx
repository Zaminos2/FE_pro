import ToDoList from "./styles/toDoList.module.css";

function ToDoValidation({userText,agree,notAgree}){

return(
    <div className={ToDoList.validationWrap}>
        <div className={ToDoList.validationForm}>
            <p>Your task is:</p>
            <p>{userText}</p>
            <div className={ToDoList.buttonWrap}>
                <button onClick={agree}>Agree</button>
                <button onClick={notAgree}>Not Agree</button>
            </div>
        </div>
    </div>
    )}
export default ToDoValidation;