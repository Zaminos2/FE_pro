import { useEffect } from 'react'
import {goodsDb} from '../../utils'
import './goodsSearch.css'
import { v4 } from 'uuid'


export default function GoodsSearch({goods,setGoods,goodsList,setGoodsList}){

    function handleSearch(event){
        setGoods(event.target.value)
    }
    console.log(goodsList)
    useEffect(() => {
        try{
        if (goods) {
          fetch(`${goodsDb}`)
            .then((response) => response.json())
            .then((data) => {
              const filteredGoodsList = data.filter((el) =>
                el.title.toLowerCase().startsWith(goods.toLowerCase())
              );
              setGoodsList(filteredGoodsList);
            });
        } else {
          setGoodsList([]);
        }
        }catch(error){
            console.error(`error ${error}`)
        }
      }, [goods]);

      function listRender() {
        return (
          <ul className='listWrap' >
            {goodsList.map((el) => (
              <li key={v4()} onClick={() => setGoods(el.title)}>
                {el.title}
              </li>
            ))}
          </ul>
        );
      }
      function goodsKardsRender(){
        return (
            goodsList.map((el)=>(
                <div key={v4()} className='goodsCard'>
                    <div className="goodsImg" style={{ backgroundImage: `url(${el.thumbnailUrl})` }}>
                    </div>
                    <p>{el.id}</p>
                    <p>{el.title}</p>
                    <div className='buttonContainer'>
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
            ))
        )
      }
      
    
    return(<>
        <div className='searchWrap'>
            <input type="text" onChange={handleSearch} />
        </div>
        <div >
            {goodsList.length>0&&listRender()}
        </div>
        <div className='productWraper'>
            {goodsList.length>0&&goodsKardsRender()}
        </div>
        </>
    )
}