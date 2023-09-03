import { useEffect } from 'react'
import {goodsDb} from '../../utils'


export default function GoodsSearch({goods,setGoods,goodsList,setGoodsList}){

    function handleSearch(event){
        setGoods(event.target.value)
    }
    console.log(goodsDb);
    useEffect(()=>{
         fetch(`${goodsDb}title_starts-with=${goods}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
        })
        
    },[goods])
    
    return(
        <div className="searchWrap">
            <input type="text" onChange={handleSearch} />
        </div>
    )
}