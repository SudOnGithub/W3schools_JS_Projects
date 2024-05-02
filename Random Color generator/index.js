function getColor(){
    const randomNumber = Math.floor(Math.random()*16777215);
    const colorCode = "#" + randomNumber.toString(16);
    document.getElementById("hex-code").innerHTML = colorCode;
    document.body.style.backgroundColor = colorCode;

    navigator.clipboard.writeText(colorCode)
}

getColor();


document.getElementById("btn").addEventListener("click", getColor);

