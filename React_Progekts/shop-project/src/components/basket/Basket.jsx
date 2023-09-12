import { v4 } from 'uuid'

export default function Basket({setMenu,basketGoods,setBasketGoods}){
    function removeFromBasket(item){
        setBasketGoods((prevBasketGoods)=>prevBasketGoods.filter((el)=>el.id!==item.id))
    }
    return (
        <div className="basketContainer">
            <button onClick={()=>{setMenu(2)}}>Главное меню</button>
            <button onClick={()=>{setMenu(3)}}>Поиск товара</button>
            <button onClick={()=>{setMenu(1)}}>X</button>
            <div className="renderContainer">
            {basketGoods.map((el)=>(
                <div key={v4()} className='goodsCard'>
                    <div className="goodsImg" style={{ backgroundImage: `url(${el.thumbnailUrl})` }}>
                    </div>
                    <p>{el.id}</p>
                    <p>{el.title}</p>
                    <div className='buttonContainer'>
                        <button onClick={()=>{removeFromBasket(el)}}>-</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
    

}