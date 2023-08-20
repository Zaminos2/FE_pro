import mainSection from "../styles/mainSection.module.css"
import {socialLinksData} from "../utils/myUtils.js"

function CreateSocials(){
    console.log(socialLinksData);
    return(
        <div className={mainSection.sociaLinkWrap}>
            {socialLinksData.map((el,index)=>(
                
                <a key={index} href={el.ref}>
                    <img className={mainSection.socialImg} key={index} url={el.icon} ></img>
                </a>
            ))}
        </div>
    )
}

function TitleSection(){
    return(
        <section>
            <div className={mainSection.titleImage}>
                <div className={mainSection.title}></div>
                <CreateSocials/>
            </div>
        </section>
    )
}
export default TitleSection;