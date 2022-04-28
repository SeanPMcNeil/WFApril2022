// 1. Always Hungry

function alwaysHungry(arr) {
    // your code here
    var isFood = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food"){
            console.log("yummy");
            isFood = true;
        }
    }
    if (isFood != true) {
        console.log("I'm hungry");
    }
}
// Can also check using .includes() 
// if (arr.includes("food")) {
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] == "food"){
//             console.log("yummy");
//         }
//     }
// } else {
//     console.log("I'm hungry");
// }


alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// 2. High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for (var i = 0; i < arr.length ; i++){
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// 3. Better Than Average

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    var avg;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    var count = 0
    // count how many values are greated than the average
    for (var x = 0; x < arr.length ; x++) {
        if (arr[x] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// 4. Array Reverse

function reverse(arr) {
    // your code here
    // using temporary placeholder variable
    var temp;
    for (var i = 0; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp;
    }
    return arr;

    // pushing values backwards into a new array
    // var revArr = [];
    // for (var i = arr.length - 1; i >= 0; i--){
    //     revArr.push(arr[i]);
    // }
    // return revArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// 5. Fibonacci Array

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for (var i = 0; i < n - 2; i++){
        fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
