import { v4 } from "uuid";
import './editUser.css'
import Accordion from 'react-bootstrap/Accordion'
import { useEffect, useState } from "react";
import {useForm} from 'react-hook-form'
import {CloseCircleOutlined} from '@ant-design/icons'

export default function EditUser({choiseMenu}){
    const [userData,setUserData]=useState(getUserData())
    const [isRender,setIsRender]=useState(false);
    console.log(userData);

 
    const {
        register
      } = useForm();
      useEffect(()=>{
        console.log(userData);
        localStorage.setItem('user',JSON.stringify(userData))
    },[userData])
    
    

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
    function editUserHandler(key, value) {
        const updatedData = { ...userData, [key]: value };
        const updatedDataJSON = JSON.stringify(updatedData);
        localStorage.setItem('user', updatedDataJSON);
        setUserData(JSON.parse(updatedDataJSON));
      }
    useEffect(()=>{
        setIsRender(true)
    },[isRender])

   
    function renderProfile(data){
        return Object.entries(data).map(([key,value],ind)=>{
            if(key==='id'||key==='username'||key==='email'){
                return <div key={v4()}>
                    <p>{key}:{value}</p>
                </div>
            }else{
                return(
                    <Accordion.Item key={v4()} eventKey={`${ind}-${key}`}>
                        <Accordion.Header>{key}:{value}</Accordion.Header>
                        <Accordion.Body>
                            <input type="text"
                             defaultValue={value}
                              {...register(key)} key={v4()}
                               onKeyDown={(event)=>{
                                if(event.keyCode===13){
                                    editUserHandler(key,event.target.value);
                                }
                            }}/>
                        </Accordion.Body>
                    </Accordion.Item>
                )
            }
        })
    }
    return (
    <div className="userMain">
        <CloseCircleOutlined className="closeButton" onClick={()=>{choiseMenu(2)}}/>
        <div className="profileInfo">
        <form className="editUserInfo">
        <Accordion flush>
        {renderProfile(userData)}
        </Accordion>
        </form>
        </div>
    </div>
    )
}