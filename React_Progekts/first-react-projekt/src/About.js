import Me from "./Me";
import MyFriends from "./MyFriends";

function About(){
    return (<div>
            <p>History of:</p>
            <Me/>
            <MyFriends/>
            </div>
    )
}
export default About;