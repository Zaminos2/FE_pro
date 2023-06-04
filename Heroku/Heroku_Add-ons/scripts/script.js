const navMainBars = document.querySelectorAll('.mainNavTools');
const itemContainers = document.querySelectorAll('.productsItemWrapp');
const produktItems = document.querySelectorAll('.produktItem');
const anchorLinks = document.querySelectorAll('.productNavLink')




function addItems1(){
  for(let i = 0; i < 31; i++){
    produktItems.forEach((produktItem, index) => {
      const cloneDiv = produktItem.cloneNode(true);
      itemContainers[index].appendChild(cloneDiv);  
    });
  }
}
addItems1();

function anchorClick(e){
//  e.preventDefault();
 const href = this.getAttribute('href')
 location.hash = href;
}
anchorLinks.forEach((anchorLink) => {
  anchorLink.addEventListener('click',anchorClick);
});