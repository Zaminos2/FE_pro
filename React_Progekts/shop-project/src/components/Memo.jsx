import { useState } from "react"

export default function Memo (){
    const [number,setNumber] = useState(0);
    const [theme,SetTheme] = useState(false);
    const themeStyle = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
      };
    return <>
        <input type='number' value={number} onChange={(e)=>{setNumber(parseInt(e.target.value))}} />
        <button onClick={()=>SetTheme((prevTheme)=>!prevTheme)}>Change Theme</button>
    </>
}