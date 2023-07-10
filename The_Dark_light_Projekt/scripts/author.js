const cardArr = [
    {
        bookTitle:"The Dark Light",
        price: "86.11 USD",
        bookDescr: "As the book contains theoretical content as well as solved qestions.",
        bookStatus: "Printed Book",
        bookImg:"../asets/home/images/book_img.svg"
    },
    {
        bookTitle:"Atomic One's",
        price: "13.84 USD",
        bookDescr: "As the book contains theoretical content as well as solved qestions.",
        bookStatus: "Printed",
        bookImg:"../asets/author/images/book_2.svg"
    }
    
]
function itemRender(){
    const container = document.querySelector(".productWrap");
    
    cardArr.forEach((card)=>{
        container.insertAdjacentHTML("afterbegin", `                
        <div class="produktItem">
        <div class="itemImg" style="background-image: url(${card.bookImg})"></div>
        <div class="itemDescr">
            <h5 class="bookTitle">${card.bookTitle}</h5>
            <p class="price">${card.price}</p>
            <p class="bookDescr">${card.bookDescr}</p>
            <div class="bookTypeWrap">
                <img src="../asets/home/icons/Rectangle.svg" alt="">
                <p class="bookType">${card.bookStatus}</p>
            </div>
        </div>
    </div>    
`);
    });
}
itemRender();
