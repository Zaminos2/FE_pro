import { v4 } from 'uuid'
import './basket.css'
import {CloseCircleOutlined} from '@ant-design/icons'

export default function Basket({setMenu,basketGoods,setBasketGoods,choiseMenu}){
    function removeFromBasket(key){
        setBasketGoods((prevBasketGoods) => {
            return prevBasketGoods.filter((element)=>element.key!==key)
          });
    }
    return (
        <div className="basketContainer">
            <div className='choiseWrap'>
            <button className="choiseButton" onClick={()=>{setMenu(2)}}>Главное меню</button>
            <button className="choiseButton" onClick={()=>{setMenu(3)}}>Поиск товара</button>
            </div>
            <CloseCircleOutlined className="closeButton" onClick={()=>{choiseMenu(1)}}/>
            <div className="renderContainer">
            {basketGoods.map((el)=>(
                <div key={v4()} className='goodsCard'>
                    <div className="goodsImg" style={{ backgroundImage: `url(${el.thumbnailUrl})` }}>
                    </div>
                    <p>{el.id}</p>
                    <p>{el.title}</p>
                    <div className='buttonContainer'>
                        <button className='basketButton' onClick={()=>removeFromBasket(el.key)}>-</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}