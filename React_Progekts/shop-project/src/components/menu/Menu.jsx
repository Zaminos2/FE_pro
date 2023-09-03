import { useState } from "react"
import {choiseButtons} from "../../utils"

export default function Menu({data,choiseMenu,setMenu}){
    

    return (
    <div className="menuwrap">
        <button className="closebutton" onClick={()=>setMenu(1)}>x</button>
       <h1>Добро пожаловать!</h1>
       <div className="messageWrap">
        <p>пользователь</p>
        <h3>{data[0].name}</h3>
       </div>
       <div className="choiseWrap">
        {choiseButtons.map((el,ind)=>(
            <button className="choiseButton" key={`${el}-${ind}`} onClick={()=>{choiseMenu(ind+3)}} >{el}</button>
        ))}
        </div>  
    </div>
    )
}