var userName = document.querySelector("#userName");

var requestSpan = document.querySelector("#requests");

var connectionSpan = document.querySelector("#connect");

function edit() {
    userName.innerText = "Mary Smith";
}

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}