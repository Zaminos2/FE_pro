import { useState } from "react";

function Input(){
    const [myText,setMyText] = useState("");
    function textChange(event){
        setMyText(event.target.value);
    }
    function onMouse(){
        localStorage.setItem("myText",myText);
    }
   
    const storedData = localStorage.getItem("myText")
    const handleClick = (event) => {
        const { clientX, clientY } = event;
        const coordinates = { x: clientX, y: clientY };
        let clickNumber = parseInt(localStorage.getItem("clickNumber")) || 1;
        const key = `clickCoordinates${clickNumber}`;
        localStorage.setItem(key, JSON.stringify(coordinates));
        localStorage.setItem("clickNumber", clickNumber + 1);
    };
    
    document.addEventListener("click", handleClick);
    
    
    return(

        <>
        <input type="text" onChange={textChange} onMouseEnter={onMouse}></input>
        <p>{storedData}</p>
        </>
    )
}
export default Input;