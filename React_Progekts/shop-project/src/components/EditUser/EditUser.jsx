import { v4 } from "uuid";
import Accordion from 'react-bootstrap/Accordion'
import { useEffect, useState } from "react";

export default function EditUser({choiseMenu}){
    const [userData,setUserData]=useState(getUserData())
    console.log(userData);

    function getUserData(){
        const data = localStorage.getItem('user');
        if(data){
            try{
                return JSON.parse(data)
            }catch(error){
                console.error(error)
            }
        }
        return {}
    }
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(userData))
    },[userData])

    function handleChangeUser(event,key){
        let{value} = event.target;
      
        setUserData(prevUserData=>({...prevUserData,[key]:value}))
    }
   
    function renderProfile(data){
        return Object.entries(data).map(([key,value],ind)=>{
            if(typeof value === 'object'){
                return(
                   <div key={v4()}>
                    <p>{key}</p>
                    {renderProfile(value)}
                   </div>
                )
            }else if(key==='id'||key==='username'||key==='email'){
                return <div key={v4()}>
                    <p>{key}:{value}</p>
                </div>
            }else{
                return(
                    <Accordion.Item key={v4()} eventKey={`${ind}-${key}`}>
                        <Accordion.Header>{key}:{value}</Accordion.Header>
                        <Accordion.Body>
                            <input type="text" defaultValue={userData[key]} name={key} key={v4()} onChange={(event)=>handleChangeUser(event,key)} />
                        </Accordion.Body>
                    </Accordion.Item>
                )
            }
        })
    }
    return (
    <div className="userMain">
        <button onClick={()=>{choiseMenu(2)}}>x</button>
        <div className="profileInfo">
        <Accordion flush>
        {renderProfile(getUserData())}
        </Accordion>
        </div>
    </div>
    )
}