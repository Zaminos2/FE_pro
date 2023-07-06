const navTitles = [
    "Explore",
    "Utility Pages",
    "Keep in Touch"
]
document.querySelectorAll(".linksTitle").forEach((element,index)=>{
    element.textContent= navTitles[index];
})

const navLinks = [
    "Home",
    "About",
    "Articles",
    "Our Store",
    "Contact US",
    "Style Guide",
    "404 Not Found",
    "Password Protected",
    "Licences",
    "Changelog"
]
document.querySelectorAll(".navLinks").forEach((element,i)=>{
    element.textContent = navLinks[i];
})
const contactTitle = [
    "Address:",
    "Mail:",
    "Phone:"
]
document.querySelectorAll(".contactTitle").forEach((element,i)=>{
    element.textContent = contactTitle[i];
})
const contactValue = [
    "24A Kingston St,Los Vegas NC 28202, USA.",
    "aupport@pages.com",
    "(+22)123-4567-900"
]
document.querySelectorAll(".contactValue").forEach((ellement,i)=>{
    ellement.textContent = contactValue[i];
})
const imgIlinks = [
    "../asets/footer/icons/facebook_white.svg",
    "../asets/footer/icons/twitter_white.svg",
    "../asets/footer/icons/in_white.svg",
    "../asets/footer/icons/instagram_white.svg"
]
const linksSrc = [
    "https://www.facebook.com/login/",
    ""
]
document.querySelectorAll(".socialLinks").forEach((el,i)=>{
    el.src = imgIlinks[i];
})