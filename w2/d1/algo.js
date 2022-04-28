// // a library is a collection of code you don't need to write, you just have to let your computer know about it
// // JS has a built in Math library

// Math.ceil(9.51) //ceil is how you round numbers up, rounds everything up
// Math.floor(8.45) //floor rounds #s down, rounds everything down

// // We generally always round down in JS

// // Generating a random number

// var random = Math.random(); // returns the numbers between 0 and 1 -> [0:1) (inclusive of 0 up to, but not including 1)
// // using floor with random gives you an almost equal distrubutiuon of chances
// // using ceil with random means you will only get 0 is you roll exactly a 0

// random = random * 11; // gives between 0 and up to 11 (non-inclusive)
// random = Math.floor(random); // rounds down to only integers

// // for brevity

// for (var i = 0; i<10 ; i++){
//     var random = Math.floor(Math.random() * 10 + 1); // 10 = range-1, 1 = minimum
//     console.log(random);
// }

// Dice Roller
// Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.

function d6() {
    var roll = Math.floor(Math.random() * 6 + 1);
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


// Consult the Oracle
// Using the following array, write a function that will answer all of our questions by randomly choosing a response

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function oracle() {
    var random = Math.floor(Math.random() * 20);
    return random;
}

var answer = oracle();
console.log(lifesAnswers[answer]);