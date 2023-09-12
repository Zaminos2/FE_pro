
import { useEffect, useState } from 'react';
import './App.css';
import LogInForm from './components/logInForm/LogInForm';
import {usersDb} from "./utils";
import ModalError from './components/logInForm/ModalError';
import Menu from './components/menu/Menu';
import GoodsSearch from './components/goodsSearch/GoodsSearch';
import Basket from './components/basket/Basket';
import EditUser from './components/EditUser/EditUser';
import {Context} from "./utils"


function App() {
  const [menu,setMenu] = useState(1)
  const [userInputs,setUserInputs] = useState([])
  const [userData,setUserData] = useState([])
  const [isExist,setIsExist] = useState(false);
  const [goods,setGoods] = useState('');
  const [goodsList,setGoodsList] = useState([])
  const[basketGoods,setBasketGoods]=useState([])
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
          <GoodsSearch goods={goods} setGoods={setGoods} goodsList={goodsList} setGoodsList={setGoodsList} setBasketGoods={setBasketGoods} setMenu={setMenu}/>
          </>
        case 4:
          return<>
          <EditUser  choiseMenu={setMenu}/>
          </>
        case 5:
          return<>
          <Basket setMenu={setMenu} basketGoods={basketGoods} setBasketGoods={setBasketGoods}/>
          </>
    }
  }
 
  useEffect(()=>{
    Object.keys(userInputs).length>0&&fetch(`${usersDb}${qeryUrl}`)
   .then(response=>response.json())
   .then(data=>{
    if(data.length>0){
      const{name,address,email,phone,username,website,company}= data[0] 
      const{street,suite,city,zipcode,geo}=address
      const{lat,lng}=geo
      const{catchPhrase,bs}= company
      const companyName = company.name
      const userData = {name,email,street,suite,city,zipcode,lat,lng,companyName,catchPhrase,bs,phone,username,website}
      setUserData(userData);
      localStorage.setItem('user',JSON.stringify(userData))
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
  <Context.Provider>
  <div className='main'>
  {pageChoise(menu)}
  </div>
  </Context.Provider>
  </>
}

export default App;
