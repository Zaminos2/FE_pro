const container = document.querySelector(".productWrap");
const photoContainer = document.querySelector(".InnerPhoto");
const authorName = document.querySelector(".authorName");
const authorEmail = document.querySelector(".authorEmail");
const authorPhone = document.querySelector(".authorphone");
const authorRaitings = document.querySelectorAll(".raiting");
authorRaitings.forEach((el,ind)=>{
    el.id = `raiting${ind}`;
})


const authorPhoto = "../asets/author/images/author_photo.svg";
const author ={
    name:'John ',
    lastName:'Abraham. Ph.d',
    email:'johnabraham@gmail.com',
    phone:'(+2) 123 545 9000',
    photo: authorPhoto,
    books_publised:'02',
    user_rewiew:'4.5',
    best_seller_awards:'0.4',
    qrCode: "../asets/author/icons/QR_code.svg"
}

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

function createAuthor(element){
    photoContainer.style.backgroundImage = `url(${author.photo})`;
    document.getElementById('raiting0').textContent = element.books_publised;
    document.getElementById('raiting1').textContent = element.user_rewiew;
    document.getElementById('raiting2').textContent = element.best_seller_awards;
    document.querySelector(".authorName").textContent = `${element.name}${element.lastName}`;
    document.querySelector(".authorEmail").textContent = element.email;
    document.querySelector(".authorphone").textContent = element.phone;
    document.querySelector(".authorQr").style.backgroundImage = `url(${author.qrCode})`
}
createAuthor(author);


