import { useState } from "react"
import {choiseButtons} from "../../utils"
import "./menu.css"

export default function Menu({data,choiseMenu,setMenu}){
   
    

    return (
    <div className="menuwrap">
        <button className="closebutton" onClick={()=>setMenu(1)}>x</button>
       <h1>Добро пожаловать!</h1>
       <div className="messageWrap">
        <p>пользователь</p>
        <h3>{data.name}</h3>
        <p className="systemMesage">Приложение находится в стадии "альфа" и финальный продукт может отличатся просим следить за обновлениями</p>
       </div>
       <div className="choiseWrap">
        {choiseButtons.map((el,ind)=>(
            <button className="choiseButton" key={`${el}-${ind}`} onClick={()=>{choiseMenu(ind+3)}} >{el}</button>
        ))}
        </div>  
    </div>
    )
}