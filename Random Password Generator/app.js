const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const symbolSet = "~!@#$%^&*()_+/";
const numberSet = "1234567890";

const passBox = document.getElementById("pass-box");
const totalChar = document.querySelector("#total-char");
const upperInput = document.querySelector("#upperCaseLetter");
const lowerInput = document.querySelector("#lowerCaseLetter");
const symbolInput = document.getElementById("symbols");
const numberInput = document.getElementById("numbers");

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }
  if (password.length < totalChar.value) {
    return generatePassword(password);
  }
  passBox.value = password.slice(0, totalChar.value);
};

document.getElementById("btn").addEventListener("click", function () {
  generatePassword();
});

generatePassword();

// Or Use truncate instead of Slice

// function truncateString(str, num){
//     if(str.length>num){
//         let subStr = str.substring(o, num);
//         return subStr;
//     } else {
//         return str;
//     }
// }
