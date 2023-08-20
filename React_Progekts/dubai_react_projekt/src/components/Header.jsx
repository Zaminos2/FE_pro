import { useState } from "react";
import header from "../styles/header.module.css";
import {linksList,contactPhone,innerLinks} from "../utils/myUtils.js";

function Header() {
  
  const [componentVisible,setComponentVisible] = useState(false);
  
  function showComponent(trigger){
    trigger(true);
  }
  function hideComponent(trigger){
    trigger(false);
  }

  function CreateLinks(){
    return(
      <>
      {linksList.map((el, index) => (
        <div key={index}>
        <a
          key={index}
          href={""}
          className={header.headLinks}
          onMouseEnter={index === 0 ? ()=>{showComponent(setComponentVisible)} : null}
        >
          {el}
        </a>
        {index===0 && componentVisible && <HoverComponent/>}
        </div>
      ))}
    </>
  )}

  function HoverComponent(){
    return(
        <div className={header.howerContainer}>
        {innerLinks.map((el,index)=>(
         <div key={index} className={header.linkContainer}>
            <a href="" className={header.howerLinks}>{el}</a>
         </div>
        ))}
       </div>
       );
  }

  return (
    <>
      <div className={header.navLinks}>
        <div className={header.linkWrap} onMouseEnter={()=>{hideComponent(setComponentVisible)}}>
          <div className={header.logo}></div>
          <div className={header.navBar} onMouseEnter={()=>{hideComponent(setComponentVisible)}}>
            <CreateLinks/>
          </div>
        </div>
        <div className={header.consultWrap}>
          <button className={header.consult}>Book a consultation</button>
          <div className={header.translateWrap}>
            <button className={header.langChoise}>Eng</button>
            <button className={header.langChoise}>Ru</button>
          </div>
          <p className={header.infoText}>{contactPhone}</p>
        </div>
      </div>
    </>
  );
}
export default Header;
