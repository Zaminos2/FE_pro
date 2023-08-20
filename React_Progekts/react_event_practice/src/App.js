import { useState } from "react";
import UserForm from "./UserForm";
import Counter from "./Counter";
import Input from "./Input";
import ToDoList from "./ToDoList";


function App() {
//  const [IsOn,setIsOn] = useState(false); 
// async function handleCheked(e){
//   await setIsOn(!e.target.cheked)
//   await setInterval(()=>console.log("hi"),1000);
// }
// //   const [ourvalue,setOurValue]= useState("");
//   function handleChange(event){
//     setOurValue(event.target.value);
//   }
//   function getValue (){
//     console.log(ourvalue);
//   }

// return <>
//   <input onChange={handleChange} value={ourvalue}></input>
//   <button onClick={getValue}></button>
// </>
// function(){
//   setInterval()
// }

// const [backgroundColor, setBackgroundColor] = useState('#f0f0f0');
// const [isHovered, setIsHovered] = useState(false);

// function handleMouseEnter() {
//   setIsHovered(true);
//   const randomColor = getRandomColor();
//   setBackgroundColor(randomColor);
// }

// function handleMouseLeave() {
//   setIsHovered(false);
//   setBackgroundColor('#f0f0f0');
// }

// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// return 
// <>
// <div style={{
//   width: '200px',
//   height: '200px',
//   backgroundColor: isHovered ? backgroundColor : '#f0f0f0',
//   }}
// onMouseEnter={handleMouseEnter}
// onMouseLeave={handleMouseLeave}

// ></div>
// </>
return <>
<ToDoList/>
</>

}

export default App;
