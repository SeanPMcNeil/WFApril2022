// // Emphasis today is on JS Objects
// // JSON = JavaScript Object Notation
// // How we represent objects in JS
// // {
// //     key: value,
// //     key2: value2,
// //     ...
// // }

// // An object has Methods or Properties
// // mycar = {
// //     "make": "ford",
// //     "make": "escape",
// //     "start": function(key){
// //         if (key == myCarKey){
// //             ...
// //         }
// //     }
// // }
// // Primitives only have values ex) the number 7 is just a value, "cat" is just cat

// function vroom (){
//     console.log('vroooooommmmmmm vroooooomm')
// }

// var vroom2 = function(){
//     console.log('vroooooooom');//functionally the same as line 22
//     console.log(this.age); //"this" uses whatever element called the function
// }

// var billy = {
//     "isrunning": false,
//     "age": 17,
//     "start": vroom2
// }

// var joe = {
//     "start": vroom2,
//     "age": 28,
//     "colors": ['red','green','chartruse'],
//     "bestie": billy
// }

// console.log(joe.colors[1]);
// console.log(joe["colors"][1]);
// console.log(joe.bestie.age); // can store another object inside of an object and call on it
// joe.bestie.start();

// billy.start(); //would call billy's start funciton
// joe.start();

// console.log(billy.age,joe["age"]); // can call on object keys in multiple ways

// // can have duplicated values but not duplicated keys

// // "this" refers to the thing calling the function
// // when "this" gets used inside an object it will always refer to that object

// // "start":function(){
// //     console.log('billy is starting');
// //     this.isrunning = true;
// //     console.log(this.isrunning);
// // }

// script for HTML starts here

function clicked(){
    console.log('was clicked');
    var h1 = document.querySelector("h1");
    var cla = document.querySelector("#cla");

    cla.innerText = "World";

    h1.style.backgroundColor = "rebeccapurple";
    // h1.style.color = "white";
    h1.onmouseover = function(){
        h1.style.backgroundColor = "green";
    }
    h1.onmouseout = function(){
        h1.style.backgroundColor = "rebeccapurple";
    }
}

function addclass(){
    var h1 = document.querySelector("h1");
    console.log(h1.classList);
    if (h1.classList.contains("red")){
        console.log("it already has red");
    }else {
        h1.classList.add("red");
        h1.classList.remove("bob");
    }
}

function firstclass(){
    var h1 = document.querySelector("h1");
    console.log(h1.classList[0]);
}

function showname(input){
    console.log(input.value);
}

// setTimeout(function(){
//     alert("This waited 3 seconds");
// },3000)
// the function passed into setTimeout is called a "callback" - simply a function passed into a function to be used

function myalert(){
    alert("This waited 3 seconds");
}

setTimeout(myalert, 3000);


// queryselector returns the first item that matches the target
// if you have multiple of an element, you can target a class or id to get one specifically
