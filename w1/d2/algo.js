//comments none of this will execute
//taking notes of making remarks
//console.log('hello') <-- will noy run

//variables - a place in memory to reference some data
var x = 25;
x = 30;
console.log(x + x);

var myname = 'sean';
console.log(myname + x); //string concatenation
console.log(myname + " " + x); //need to manually add a space either to the variable or in the command

//Loops - variables and loops make up the vast majority of code you will do

for(var i = 0;i < 10;i++){//need 3 things: initialize variable, a condition (yes/no), a change to the variable
    //code to run
    console.log(i);
} 
//1. Creates variable | 2. Checks Condition, if false, loop ends, if true runs code
//3. Runs the code | 4. Change variable --> repeat 2-4 until condition is false

//arrays
//[] <-- array notation, can store numbers, strings, and variables
var myarray=[1,2,'x',x]; //array positions begin at 0: 0=1, 1=2, 2='x', 3=x

console.log(myarray[2]);

//combining loops and arrays is big in JS = iterating over an array
for (var i = 0;i < myarray.length; i++){
    console.log(myarray[i]);
}