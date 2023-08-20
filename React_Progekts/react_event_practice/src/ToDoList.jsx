import { useState } from "react";
import ToDoValidation from "./ToDoValidation";
import toDoList from "./styles/toDoList.module.css"
function ToDoList(){
    const [userText,setUserText] = useState("");
    const [userTasks,setuserTasks] = useState([]);
    const [isVisible,setIsVisible] = useState(false);

    function getTaskData(event){
        setUserText(event.target.value);
    }
    function createTask(){
        if(userText.trim()==="")return;
        setuserTasks([...userTasks,userText]);
        setUserText("");
        closevalidation();
    }
    function removeTask(index){
        const newTaskArr = [...userTasks];
        newTaskArr.splice(index,1);
        setuserTasks(newTaskArr);
    }
    function renderToDo(){
        return(
        <div className={toDoList.myListWrap}>
        <ul>
            {userTasks.map((task,index)=>(
                <li key={index}>
                    {task}
                    <button onClick={()=>removeTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
        </div>)
    }
    function renderValidation(){
        setIsVisible(true);
    }
    function closevalidation(){
        setIsVisible(false);
    }
    return(
    <>
    <div className={toDoList.toDoWrap}>
    <div className={toDoList.toDoForm}>
        <h2>My todo list</h2>
    <input type="text" onChange={getTaskData} value={userText}></input>
    <button onClick={renderValidation}>Create task</button>
    </div>
    {renderToDo()}
    {isVisible&&(<ToDoValidation 
    userText={userText}
    agree={createTask}
    notAgree={closevalidation}
    />)}
    </div>
    </>)
}
export default ToDoList;