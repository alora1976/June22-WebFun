window.addEventListener("load", function() {
    var elements = document.getElementsByClassName("rainbowText");
    for (let i = 0; i < elements.length; i++) {
    generateRainbowText(elements[i]);
    }
});

var cookies = document.querySelector(".cookie-policy");

function loading() {
    alert("Loading weather data...");
}

function accept() {
    cookies.remove();
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}

function generateRainbowText(element) {
    var text = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
    let charElem = document.createElement("span");
      charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
    charElem.innerHTML = text[i];
    element.appendChild(charElem);
    }
}