const a = prompt();

let isNumber = false;
let isString = false;
let isSpecChar = false;

for (let i = 0; i < a.length; i++) {
  const aChar = a.charAt(i);

  if (!isNaN(aChar) && aChar !== " ") {
    isNumber = true;
  } else if (isNaN(aChar) && aChar !== " ") {
    isString = true;
  } else {
    isSpecChar = true;
  }
}

if ((isString || isSpecChar) && isNumber) {
  console.log("Invalid Value");
} else if (isString && !isNumber) {
  console.log("String");
} else if (!isString && isNumber) {
  console.log("Number");
} else {
  console.log("Invalid Value");
}
