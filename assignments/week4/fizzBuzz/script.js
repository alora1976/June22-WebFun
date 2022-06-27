
var number = 0
result = ""
while (number <= 100) {
if (number % 3 === 0 && number % 5 === 0) {
    result = 'FizzBuzz'
} else if (number % 3 === 0) {
    result = 'Fizz'
} else if (number % 5 === 0) {
    result = 'Buzz'
} else {
    result = number
}
number++
    document.getElementById("fizz").innerHTML += result + "<br>";
}
