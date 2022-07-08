// randomly change color of divs
window.addEventListener("load",function changeColor() {
  var colors = ["red", "blue", "green", "yellow", "orange", "purple"];
  var random = Math.floor(Math.random() * colors.length);
  var color = colors[random];
  document.getElementById("bgcolor").style.backgroundColor = color;
})

var colors = document.querySelectorAll(".color");
    
function applyColors(){
    for(var i=0; i<colors.length; i++) {
        colors[i].style.color = colors[i].innerText;
    }
}
