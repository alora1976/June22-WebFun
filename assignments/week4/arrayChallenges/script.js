// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

alwaysHungry([3.14, "food", "pie", true, "food",4,1,5,7,2]);

function alwaysHungry(arr) {

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "food") {
    food = true;
    console.log("yummy");
    }
    else {
    food = false;
    }
    console.log("I'm hungry");
}

}

//High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff. 
// For example, if cutoff is 5, return an array containing only the values greater than 5.

function highPass(arr, cutoff) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var result = highPass([6,8,3,10,-2,5,9], 5);
console.log(result);

// Given an array of numbers return a count of how many of the numbers are larger than the average
function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    } var avg = sum / arr.length;   // average of the array (sum / arr.length)  = avg   (sum / arr.length)  = avg
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count++;
        }
    }   return count;   // count of how many numbers are larger than the average=count
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);// we expect back 4

// Write a function that will reverse the values an array and return them.
function reverse(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//Fibonacci Array
// Fibonacci numbers have been studied for years and appear often in nature. Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    var fibArr = [0, 1];    
    for (var i = 2; i <= n; i++) {
        fibArr.push(fibArr[i - 2] + fibArr[i - 1]);    
    }
    return fibArr;  // return the array of fibonacci numbers
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
