const info = ["item", "logo", "lift", "icon", "ice", "let"];

const newInfo = info.map((el) => {
    if(el.startsWith("i")){
        return "pro" + el;
    }else if(el.startsWith("l")){
        return "min" + el;
    }
})
console.log(newInfo);