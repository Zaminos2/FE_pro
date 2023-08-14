// const main = document.querySelector(".main");
// navBar part
const navLinksValues = [
    "Главная",
    "Услуги",
    "Кейсы",
    "Контакты"
]
const sityPhotos = [
    "https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/1-Paris._France-e1530811226705.jpg",
    "https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/07/2-Rome._Italy-e1530811410431.jpg",
    "https://tengritravel.kz/userdata/news/2019/news_372476/thumb_m/photo_284716.jpg",
    "https://lifeglobe.net/media/entry/6402/1a-0.jpg",
    "../asets/images/Rectangle.svg"
]
const ourServices = [
    "Бухгалтерские услуги в вашем городе.",
    "Оформление документов.",
    "Составление сметты проэкта.",
    "Адвокатские услуги.",
    "Финансы и кредиты.",
]
const companyName = "BuhOne";
const logoText = document.querySelector(".logoName");
const navLink = document.querySelectorAll(".navLinks");
const sliderContainer = document.getElementById("firstSlider");
const sliderBox = document.querySelectorAll(".slider");

function fillTexts(arr,companyName){
    arr.forEach((element,ind) => {
        navLink[ind].textContent = element;
});
        logoText.textContent = companyName;
}
fillTexts(navLinksValues,companyName)

// slider part

function createSlide(text){
    const slide = document.createElement("div");
    slide.classList.add("slide","slide1");
    const slideText = document.createElement("h2");
    slideText.classList.add("slideText");
    const slideButton = document.createElement("button");
    slideButton.classList.add("slideButton");
    slideButton.textContent = "Наша презентaция";
    slideText.textContent = `${text}`;
    slide.append(slideText);
    slide.append(slideButton);
    return slide;
}
function createSlider(parent,slideEl,arr){
    const sliderLine = document.createElement("div");
    sliderLine.classList.add("sliderline");
    parent.append(sliderLine);
    arr.forEach((el)=>{
        const slide = slideEl(el);
        sliderLine.append(slide);
    })
}  

createSlider(sliderContainer,createSlide,ourServices);

const slides1 = document.querySelectorAll(".slide1");
const sldeWidth = 1110;
let currentIndex = 0;

function ShowSlide(index){
    const sliderLine = document.querySelector(".sliderline");
    currentIndex = index;
    const translateXValue = -sldeWidth*currentIndex;
    sliderLine.style.transform = `translateX(${translateXValue}px)`;
}
function nextSlide(){
currentIndex = (currentIndex+1)%slides1.length;
ShowSlide(currentIndex);
}
function previosSlide(){
    currentIndex = (currentIndex -1+slides1.length)%slides1.length;
    ShowSlide(currentIndex);
}
function choiseSlide(index){
    ShowSlide(index)
}
function createButtons(arr,parent){
    const selectBox = document.createElement("div");
    selectBox.classList.add("selectBox");
    const biasContainer = document.createElement("div");
    biasContainer.classList.add("biasContainer");
    const leftButton = document.createElement("button");
    leftButton.classList.add("directionalButton","leftButton");
    leftButton.textContent = "<"
    leftButton.addEventListener("click",previosSlide);
    const rightButton = document.createElement("button");
    rightButton.textContent = ">"
    rightButton.classList.add("directionalButton","rightButton");
    rightButton.addEventListener("click",nextSlide);

  arr.forEach((_,index)=>{
    const selectButton = document.createElement("button");
    selectButton.classList.add("selectButton");
    selectButton.addEventListener("click",()=>{
        choiseSlide(index);
    })
       parent.append(selectBox);
        parent.append(biasContainer);
        biasContainer.append(leftButton,rightButton);
        selectBox.append(selectButton);
  })
}
createButtons(ourServices,sliderContainer);

// products part

const produktArray = [
  {
    productImage: "./asets/images/Rectangle2.svg",
    productTitle: "Бухгалтерское щбслуживание",
    productHref: "https://play.google.com/store/apps/details?id=com.goo.goo&hl=gsw&pli=1"
  },
  {
    productImage: "./asets/images/Rectangle2.svg",
    productTitle: "Бухгалтерское щбслуживание",
    productHref: "https://play.google.com/store/apps/details?id=com.goo.goo&hl=gsw&pli=1"
  },
  {
    productImage: "./asets/images/Rectangle2.svg",
    productTitle: "Бухгалтерское щбслуживание",
    productHref: "https://play.google.com/store/apps/details?id=com.goo.goo&hl=gsw&pli=1"
  },
  {
    productImage: "./asets/images/Rectangle2.svg",
    productTitle: "Бухгалтерское щбслуживание",
    productHref: "https://play.google.com/store/apps/details?id=com.goo.goo&hl=gsw&pli=1"
  },
  {
    productImage: "./asets/images/Rectangle2.svg",
    productTitle: "Бухгалтерское щбслуживание",
    productHref: "https://play.google.com/store/apps/details?id=com.goo.goo&hl=gsw&pli=1"
  },
  {
    productImage: "./asets/images/Rectangle2.svg",
    productTitle: "Бухгалтерское щбслуживание",
    productHref: "https://play.google.com/store/apps/details?id=com.goo.goo&hl=gsw&pli=1"
  },
];
const productContainer = document.querySelector(".productWrap");

function createProduktCard(arr){
    
    arr.forEach((el)=>{
        const productCard = document.createElement("div");
        const produktInnerLayer = document.createElement("div");
        const produktText = document.createElement("h3");
        const productLink = document.createElement("a");
        productLink.classList.add("productLink");
        productLink.href = `${el.productHref}`
        productCard.classList.add("productCard");
        productCard.style.backgroundImage = `url(${el.productImage})`;
        produktInnerLayer.classList.add("productInnerLayer");
        produktText.classList.add("productText");
        produktText.textContent = `${el.productTitle}`;
        productContainer.append(productLink);
        productLink.append(productCard);
        productCard.append(produktInnerLayer,produktText);
        
    })

}
createProduktCard(produktArray);

// about section
const companyInfo = {
    companyName: "ИвановПром",
    companyDescr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias veniam cumque vel maiores voluptatem incidunt beatae dicta, sapiente odit sunt, sint repudiandae cum nemo doloribus, quo rem nam quisquam dolores natus et provident magni? Dolores quidem explicabo unde voluptates enim, molestiae iure optio quos quaerat ratione rerum? Quisquam, eum consequatur."
}
const aboutProducts = document.querySelector(".aboutProducts");
function fillCompanyText(company){
    const companyName = document.querySelector(".companyName");
    const companyDescrText = document.querySelector(".aboutText");
    companyName.textContent = `${company.companyName}`;
    companyDescrText.textContent = `${company.companyDescr}`
}
fillCompanyText(companyInfo);

const aboutCards = [
    {
        servicesCount: 90,
        servicesDescr: "Завершено крупных сделок",
        companyCasesLink:"https://best.aliexpress.com/?af=5c675ee3ef6ae&dp=5c675ee3ef6ae&aff_fcid=3ba29e90708c4f8e91450da96c5a047d-1691646540044-09707-_AdZIyM&tt=CPS_NORMAL&aff_fsk=_AdZIyM&aff_platform=portals-promotion&sk=_AdZIyM&aff_trace_key=3ba29e90708c4f8e91450da96c5a047d-1691646540044-09707-_AdZIyM&terminal_id=e97c3c70d72f4c4ba96c95f9770ca596" 
    },
    {
        servicesCount: 73,
        servicesDescr: "Завершено крупных сделок",
        companyCasesLink:"https://best.aliexpress.com/?af=5c675ee3ef6ae&dp=5c675ee3ef6ae&aff_fcid=3ba29e90708c4f8e91450da96c5a047d-1691646540044-09707-_AdZIyM&tt=CPS_NORMAL&aff_fsk=_AdZIyM&aff_platform=portals-promotion&sk=_AdZIyM&aff_trace_key=3ba29e90708c4f8e91450da96c5a047d-1691646540044-09707-_AdZIyM&terminal_id=e97c3c70d72f4c4ba96c95f9770ca596" 
    },
    {
        servicesCount: 50,
        servicesDescr: "Завершено крупных сделок",
        companyCasesLink:"https://best.aliexpress.com/?af=5c675ee3ef6ae&dp=5c675ee3ef6ae&aff_fcid=3ba29e90708c4f8e91450da96c5a047d-1691646540044-09707-_AdZIyM&tt=CPS_NORMAL&aff_fsk=_AdZIyM&aff_platform=portals-promotion&sk=_AdZIyM&aff_trace_key=3ba29e90708c4f8e91450da96c5a047d-1691646540044-09707-_AdZIyM&terminal_id=e97c3c70d72f4c4ba96c95f9770ca596" 
    },
    {
        servicesCount: 115,
        servicesDescr: "Завершено крупных сделок",
        companyCasesLink:"https://best.aliexpress.com/?af=5c675ee3ef6ae&dp=5c675ee3ef6ae&aff_fcid=3ba29e90708c4f8e91450da96c5a047d-1691646540044-09707-_AdZIyM&tt=CPS_NORMAL&aff_fsk=_AdZIyM&aff_platform=portals-promotion&sk=_AdZIyM&aff_trace_key=3ba29e90708c4f8e91450da96c5a047d-1691646540044-09707-_AdZIyM&terminal_id=e97c3c70d72f4c4ba96c95f9770ca596" 
    }
]

function createAboutCard(arr,parrent){
    arr.forEach((el)=>{
        const aboutProductCard = document.createElement("div");
        const productCount = document.createElement("h2");
        const serviceDescr = document.createElement("p");
        const companyLink = document.createElement("a");
        aboutProductCard.classList.add("aboutProductCard");
        productCount.classList.add("productCount");
        serviceDescr.classList.add("serviceDescr");
        companyLink.classList.add("companyLink");
        productCount.textContent = `${el.servicesCount}`;
        serviceDescr.textContent = `${el.servicesDescr}`;
        companyLink.textContent = "все кейсы";
        companyLink.href = "";
        parrent.append(aboutProductCard);
        aboutProductCard.append(productCount);
        aboutProductCard.append(serviceDescr);
        aboutProductCard.append(companyLink);
        aboutProductCard.addEventListener("mouseover",(event)=>{
            cardHower(aboutProductCard,companyLink);
        })
        aboutProductCard.addEventListener("mouseout",(event)=>{
            cardHower(aboutProductCard,companyLink);
        })
    })
    
}

createAboutCard(aboutCards,aboutProducts);

function cardHower(card,link){
    card.classList.toggle("activeCard");
    link.classList.toggle("whiteText"); 
}
// our partners
const specialSlider = document.querySelector(".specialSlider");
const partnerList = [
    {
        partnerLogo: "./asets/icons/partnersLogo.svg"
    },
    {
        partnerLogo: "./asets/icons/partnersLogo.svg"
    },
    {
        partnerLogo: "./asets/icons/partnersLogo.svg"
    },
    {
        partnerLogo: "./asets/icons/partnersLogo.svg"
    },
]
function createPartnerSlide(arr){
    arr.forEach((el)=>{
        const partnerSlide = document.createElement("div");
        const partnerLink = document.createElement("a");
        partnerSlide.classList.add('partnerSlide');
        partnerLink.classList.add("partnerLink");
        partnerSlide.style.backgroundImage = `url(${el.partnerLogo})`;
        specialSlider.append(partnerLink);
        partnerLink.append(partnerSlide);
    })
}
createPartnerSlide(partnerList);

function createSecondButtons(arr,parrent){
    const selectBox = document.createElement("div");
    selectBox.classList.add("selectBox2");
    const previosButton = document.createElement("button");
    previosButton.textContent = "<";
    const nextButton = document.createElement("button");
    nextButton.textContent = ">";
    const biasContainer = document.createElement("div");
    previosButton.classList.add("previosButton");
    nextButton.classList.add("nextButton");
    biasContainer.classList.add("biasContainer");
    biasContainer.append(previosButton,nextButton);
    parrent.append(biasContainer);
    parrent.append(selectBox);
    arr.forEach((el)=>{
        const selectButton = document.createElement("button");
        selectButton.classList.add("selectButton2");
        selectBox.append(selectButton);
        

    })
}
createSecondButtons(partnerList,specialSlider);