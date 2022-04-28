// Swapping values of 2 variables

var fruit1 = "apples";
var fruit2 = "oranges";

console.log(fruit1);
console.log(fruit2);

// need to create a temporary variable to store the value of one of the variables we are swapping

var temp = fruit1;
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit1);
console.log(fruit2);

// While Loops

var x = 1; // variable needs to be made before the loop
while (x<10) { //Only conditions in a while loop
    x++; //Need to change the variable in the condition or loop will run forever
    break; //can break instead
    return; //can return to end the loop
}

var start = 0;
var end = 12;

while (start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}