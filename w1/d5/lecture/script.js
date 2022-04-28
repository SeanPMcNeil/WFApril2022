// // Node.JS is a runtime for JavaScript interpretation
// // Navigate to the folder w/ file in Terminal
// // cd = changedirectory > ex) cd work changes to work folder | cd .. goes up a folder
// // ls to show what folders are in your current folder 
// // Type node 'filename'.js to run the file
// // can tab-complete file names, Terminal is case sensitive
// console.log('hello class again');

// // variables
// var name = 'bob'; //string
// var mynum = 8; //number
// var arr = []; //array (object)
// var mycat = {}; //object
// var israining = false; //boolean

// mynum = 'five'; //can change variable content and type at will --> variables are loosely typed

// // operators
// //  +      -        *       /      %   and   &&   ||      ++        --        ==             ===         =          !=            <             >                    <= >=
// // add subtract multiply divide modulo AND 'and' 'or' increment decrement 'equal to' 'better equal to' assign 'not equal to' 'less than' ' greater than' 'less/greater than or equal to'

// // conditionals
// if (mynum >10){
//     // code
//     console.log('this will have an error');
// }

// // optionally if/else
// if(mynum == 'four') {
//     console.log('i like 4');
// } else{
//     console.log('i wish it was four');
// }

// if (mynum == 'five' || israining){ //can use multiple conditionals
//     console.log('its a dreary day');
//     // if either side of the conditional is true it results in true
// }

// // loops
// for (var i = 0; i<10; i++){
//     console.log(i);
// }

// var i = 0;
// while(i<10){
//     console.log(i);
//     i++; //have to change the variable in the loop
// }

// // arrays
// // use array notation []
// // can store anything in an array
// // even null, undefined, or leave it empty (all separate things), once you fill an array spot it cannot be empty again
// var myarr = ['a','b','c'];
// // get value at index 1
// // arrays are 0 indexed -> they start at 0
// myarr[1];
// // set value at index 2
// myarr[2] = 'cat';

// myarr[0] = null;
// console.log(myarr)

// // can add to the end of an array w/ push
// myarr.push('zebra');
// console.log(myarr);

// // can remove the last item w/ pop
// myarr.pop();
// console.log(myarr);

// // functions
// function setx(value,value3) { //declare function
//     x = value;
// }
// //call function
// setx(4); //will go into the first spot, undefined will go into value3
// console.log(x);

// function makearr(num1,num2,num3){
//     return[num1,num2,num3];
// }

// var newarr = makearr(1,2,3);
// console.log(newarr);

// // all functions return something, if there's no return statement they return undefined

console.log('page loading....');

// THIS
// refers to whoever called the funtion that 'this' is inside of

function example(element){
    console.log('Element clicked', element);
}

function disappear(element){
    element.remove();
}

function over(element){
    element.style.backgroundColor = 'lime'; //no dash and a capital C in color -> different from CSS
}

function out(element){
    element.style.backgroundColor = 'white';
}