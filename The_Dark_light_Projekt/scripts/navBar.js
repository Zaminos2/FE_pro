const navMain = document.querySelector("body");
const navLoc = "/C:/Users/Tel-ran.de/Desktop/FE_pro/The_Dark_light_Projekt/components/navBar.html"
// if(location.pathname === navLoc){
//     navRender();    
// }

function navRender(){
    navMain.insertAdjacentHTML("afterbegin",`<section class="navigation">
    <div class="navWrap">
        <div class="navSocial">
            <img src="../asets/navBar/icons/IMAGE_1.svg" alt="altImg" class="logoImg">
            <div class="socialContainer">
                <a href="" class="socialItem">
                    <div class="itemContain">
                    </div>
                </a>
                <a href="" class="socialItem">
                    <div class="itemContain">
                    </div>
                </a>
                <a href="" class="socialItem">
                    <div class="itemContain">
                    </div>
                </a>
            </div>
        </div>
        <div class="navLinksCont">
            <div class="linksContainer">
                <a href="" class="pageLiks">Home</a>
                <a href="" class="pageLiks">Author</a>
                <a href="" class="pageLiks">Companies</a>
                <a href="" class="pageLiks">Articles</a>
            </div>
            <button class="order">Order Todey</button>
        </div>
    </div>
</section>
`)
const pathToIcons = [
    "../asets/navBar/icons/social_networks/social0.svg",
    "../asets/navBar/icons/social_networks/social1.svg",
    "../asets/navBar/icons/social_networks/social2.svg"
]

document.querySelectorAll(".itemContain").forEach((div,index) => {
    const img = document.createElement("img");
    img.src = pathToIcons[index];
    div.appendChild(img);
})

}
navRender();
