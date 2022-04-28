// Base Assignment

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("thin", "sweet", "mozzarella", "pepperoni");
console.log(p3);

var p4 = pizzaOven("New York Style", "BBQ", "colby-monterey jack", ["chicken", "pepperoncini", "onions"]);
console.log(p4);

// Random Pizza Builder

var crusts = ["deep dish", "hand tossed", "thin", "New York style"];
var sauces = ["traditional", "marinara", "sweet", "BBQ"];
var cheesy = ["mozzarella", "feta", "colby-monterey jack", "Italian"];
var goodies = ["pepperoni", "sausage", "peppers", "chicken", "mushrooms", "olives", "onions", "pepperoncini"];


function randomPizza(){
    var pizza = {};
    pizza.crustType = crusts[Math.floor(Math.random() * crusts.length)];
    pizza.sauceType = sauces[Math.floor(Math.random() * sauces.length)];
    pizza.cheeses = [];
    pizza.toppings = [];
    for (var x = 1; x <= numCheese; x++){
        // if (x > 1){                                                  // was having problems pushing to an array in early code, so I was concatenating strings, but fixed it
        //     pizza.cheeses += ", "
        // }
        // pizza.cheeses += cheesy[Math.floor(Math.random() * cheesy.length)];
        pizza.cheeses.push(cheesy[Math.floor(Math.random() * cheesy.length)]);
    }
    for (var y = 1; y <= numTopp; y++){
        // if (y > 1){                                      
        //     pizza.toppings += ", ";
        // }
        // pizza.toppings += goodies[Math.floor(Math.random() * goodies.length)];
        pizza.toppings.push(goodies[Math.floor(Math.random() * goodies.length)]);
    }

    return pizza;
}

var numCheese = Math.floor(Math.random() * 2 + 1);
var numTopp = Math.floor(Math.random() * 3 + 1);

console.log("Cheeses: " + numCheese + ", Toppings: " + numTopp);

console.log(randomPizza(numCheese, numTopp));