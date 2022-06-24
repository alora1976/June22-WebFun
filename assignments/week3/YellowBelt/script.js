
function choice1(select) {
    alert("You are looking for a : "+ select.options[select.selectedIndex].text);
}


function hide(element) {
    element.remove();
}

var count1 = 0;
var btn1 = document.getElementById("btn1");
var disp1 = document.getElementById("display_pepper");

btn1.onclick = function () {
    count1++;
    disp1.innerHTML = count1;
}


var count2 = 0;
var btn2 = document.getElementById("btn2");
var disp2 = document.getElementById("display_bruce");

btn2.onclick = function () {
    count2++;
    disp2.innerHTML = count2;

}

var count3 = 0;
var btn3 = document.getElementById("btn3");
var disp3 = document.getElementById("display_oscar");

btn3.onclick = function () {
    count3++;
    disp3.innerHTML = count3;

}