
import { useEffect, useState } from 'react';
import './App.css';
import LogInForm from './components/logInForm/LogInForm';
import {usersDb} from "./utils";
import ModalError from './components/logInForm/ModalError';
import Menu from './components/menu/Menu';
import GoodsSearch from './components/goodsSearch/GoodsSearch';
import Basket from './components/basket/Basket';


function App() {
  const [menu,setMenu] = useState(1)
  const [userInputs,setUserInputs] = useState({})
  const [userData,setUserData] = useState({})
  const [isExist,setIsExist] = useState(false);
  const [goods,setGoods] = useState('');
  const [goodsList,setGoodsList] = useState([])
  const qeryUrl = `username=${userInputs.userName}&email=${userInputs.email}`



  function onSubmit(data){
    setUserInputs(data)
  }

  function pageChoise(menu){
      switch(menu){
        case 1:
          return <>
          <LogInForm onSubmit ={onSubmit}/>
          <ModalError show={isExist}
                onHide={() => setIsExist(false)}/>        
          </>
        case 2:
          return <>
          <Menu data = {userData} choiseMenu={setMenu} setMenu={setMenu}/>  
          </>
        case 3:
          return<>
          <GoodsSearch goods={goods} setGoods={setGoods} goodsList={goodsList} setGoodsList={setGoodsList}/>
          </>
        case 5:
          return<>
          <Basket/>
          </>
    }
  }
 
  useEffect(()=>{
    Object.keys(userInputs).length>0&&fetch(`${usersDb}${qeryUrl}`)
   .then(response=>response.json())
   .then(data=>{
    if(data.length>0){
      setUserData(data);
      localStorage.setItem('user',JSON.stringify(data))
      setMenu(2)
    }else{
      setIsExist(true);
    }
   })
    .catch((error)=>{
      console.error('fetch error',error)
      alert('no such user')
    })
  },[userInputs])
  return<>
  <div className='main'>
  {pageChoise(menu)}
  </div>
  </>
}

export default App;
