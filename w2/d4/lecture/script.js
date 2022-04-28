// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;
// var number = 10;
// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

var people = [{name:'bob'}, {name:'carl'}, {name:'joe'}];

for (var i = 0; i < people.length; i++) {
    var rand = Math.floor(Math.random() * 100 + 1);
    people[i].score = rand;
}

people[0].bestie = people[1];

// var ps = document.querySelectorAll('p');
// // console.log(ps);

// for (var i = 0; i < ps.length ; i++){
//     ps[i].style.backgroundColor = 'firebrick';
// }

var ps = document.querySelectorAll('.fb'); // '.container > .fb' --> can use any CSS selector
// console.log(ps);

// for (var i = 0; i < ps.length ; i++){
//     ps[i].style.backgroundColor = 'firebrick';
// }

// ps[1].innerText = "aquamarine";
newstr = "";
for (var i = 0; i < people.length; i++){
    newstr += '<a href="#">go to ' + people[i].name + 's </a> or at least not here <br>'   
}

ps[1].innerHTML = newstr;




// Application Programming Interface --> API
// a place we send commands to get data
var poke;

async function getPoke(){ //asynchronous function --> happening out of order
    var res = await fetch('https://pokeapi.co/api/v2/pokemon/');
    var data = await res.json();
    poke = data.results;
}

function addPoke(){
    newstr = "<ul>";
    for (var i = 0; i < poke.length ; i++){
        newstr += "<li>" + poke[i].name + "</li>"
    }
    ps[1].innerHTML = newstr + "</ul>";
}

// var blas;
// async function showBlas() {
//     // console.log(poke[8]);
//     // console.log(poke[8].url);
//     var res = await fetch('https://pokeapi.co/api/v2/pokemon/9/');
//     // console.log(res);
//     var data = await res.json();
//     blas = data.results;

//     console.log(blas);
// }

// AJAX == Asynchronous JavaScript AND XML
// XML is a way of storing data we can send to/from computers
// Then we can just change the data to JSON and use it to update our page