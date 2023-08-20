import header from "../styles/header.module.css"
import Header from "../components/Header";
import TitleSection from "./TitleSection";

function Home(){
    return<>
    <div className={header.headerWrap}>
        <Header/>
        <TitleSection/>
    </div>
    </>
}
export default Home;