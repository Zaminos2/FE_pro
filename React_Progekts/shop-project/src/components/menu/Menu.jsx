
import {choiseButtons} from "../../utils"
import "./menu.css"
import {CloseCircleOutlined} from '@ant-design/icons'

export default function Menu({data,choiseMenu,setMenu}){
   
    

    return (
    <div className="menuwrap">
        <CloseCircleOutlined className="closeButton" onClick={()=>{setMenu(1)}}/>
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