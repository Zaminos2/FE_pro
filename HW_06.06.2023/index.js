const button = document.querySelector(".mobileNav");
const mobileCont = document.querySelector(".mobileWrapp");
const mobileCont2 = document.querySelector(".mobileWrapp2");

function openNav() {
    button.addEventListener('click', () => {
      mobileCont.classList.toggle("mobileWrapp2");
    });
  }
  
  openNav();