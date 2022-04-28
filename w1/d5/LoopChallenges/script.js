// 1.
for (var x = 1; x <= 20; x++){
    if(x % 2 != 0){
        console.log(x);
    }
}

// Alternative using while loop
// var x = 1;

// while (x <= 20){
//     if (x % 2 != 0){
//         console.log(x);
//     }
//     x++;
// }

// 2.
for (var x = 100; x >= 0; x--){
    if(x % 3 == 0){
        console.log(x);
    }
}

// 3.
var x = 4;
while (x > -5){
    console.log(x);
    x-=1.5;
}

// Alternative using for loop
// for (var x = 4; x > -5; x-= 1.5){
//     console.log(x);
// }

// 4.
var sum = 0;

for (var x = 1; x <= 100; x++){
    sum += x;
}

// Alternative using while loop
// var x = 1;

// while (x <= 100){
//     sum += x;
//     x++;
// }

console.log(sum);

// 5.
var product = 1;

for (var x = 1; x <= 12; x++){
    product *= x;
}

console.log(product);