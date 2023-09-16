import { useEffect,useRef,useState} from 'react'
import {goodsDb} from '../../utils'
import './goodsSearch.css'
import { v4 } from 'uuid'
import { debounce } from "debounce";


export default function GoodsSearch({goods,setGoods,goodsList,setGoodsList,setBasketGoods,setMenu}){

    const focusInput =useRef(null);
    const [resultRender,setResultRender] =useState(1);
    const [inputValue,setInputValue] = useState('');
    function HandleRender(){
      switch(resultRender){
        case 1:
          return(
            <p>Which product do you want?</p>
          )
        case 2:
          return(
            <p>No such produkt</p>
          )
        case 3:
          return(
          goodsKardsRender()
          )
        default:
            return null;
      }
    }
    useEffect(()=>{
      focusInput.current.focus();
    },[])
    function addToBasket(element){
      setBasketGoods((prevBasketGoods)=>[...prevBasketGoods,{...element,key:`${v4()}`}])
    }
    const handleDebounce = debounce((value)=>setGoods(value),2000)
     async function handleSearch(event){
        const value = event.target.value;
        if(value.trim()===''){
          setInputValue(value);
          setResultRender(1);
        }
        await handleDebounce(value);
    }
    useEffect(() => {
        try{
        if (goods) {
          fetch(`${goodsDb}`)
            .then((response) => response.json())
            .then((data) => {
              const filteredGoodsList = data.filter((el) =>
                el.title.toLowerCase().startsWith(goods.toLowerCase())
              );
              if(filteredGoodsList.length>0){
              setGoodsList(filteredGoodsList);
              setResultRender(3);
              }else{
                setResultRender(2)
              }
            });
        } else{
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
                        <button className='basketButton' onClick={()=>{addToBasket(el)}}>+</button>
                    </div>
                </div>
            ))
        )
      }
      
    
    return(<>
        <div className='searchWrap'>
            <input className='input' type="text" ref={focusInput} onChange={handleSearch} />
            <div className="choiseWrap">
              <button className="choiseButton" onClick={()=>setMenu(2)}>Вернутся в меню</button>
              <button className="choiseButton" onClick={()=>setMenu(5)}>Прейти в корзину</button>
            </div>
        </div>
        <div className='listContainer' >
            {goodsList.length>0&&listRender()}
        </div>
        <div className='productWraper'>
        <HandleRender/>
        </div>
        </>
    )
}