document.addEventListener("DOMContentLoaded",()=>{
    const navLinks = document.querySelectorAll(".pageLiks");
    navLinks.forEach((el,ind)=>{
        el.id = `link${ind}`
    });
    const homeLink = document.getElementById("link0");
    const authorLink = document.getElementById("link1");
    const companieslink = document.getElementById("link2");
    const articlesLink = document.getElementById("link3");

    homeLink.addEventListener("click",(event)=>{
        event.preventDefault();
        location.href = "../components/home.html"
    })
    authorLink.addEventListener("click",(event)=>{
        event.preventDefault();
        location.href = "../components/author.html"
    })
    const socialLink = document.querySelectorAll(".socialItem");
    socialLink.forEach((el,ind)=>{
        el.id = `social${ind}`
    });

    const facebookLink = document.getElementById("social0");
    const twitterLink = document.getElementById("social1");
    const linkedInLink = document.getElementById("social2");

    facebookLink.addEventListener("click",(event)=>{
        event.preventDefault();
        location.href = "https://www.facebook.com/";
    });
    twitterLink.addEventListener("click",(event)=>{
        event.preventDefault();
        location.href = "https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dru";
    });
    linkedInLink.addEventListener("click",(event)=>{
        event.preventDefault();
        location.href = "https://www.linkedin.com/";
    });
});

