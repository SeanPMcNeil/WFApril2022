// // Nesting Arrays

// var arr2d = [   [2, 5, 8],
//                 [3, 6, 1],
//                 [5, 7, 7]];

// // We can console.log the '8' in this array if we:
// // console.log(arr2d[0][2]);

// // the first index '0' will select the '[2, 5, 8]' sub-array
// // the second index '2' will select the '8' out of that sub-array

// // console.log(arr2d[i][y]);

// // In order to iterate through everything we need TWO For() Loops

// // Loops over outer array
// for (var i = 0; i < arr2d.length; i++){ 
//     // Loops over inner array
//     for (y = 0; y < arr2d[i].length; y++){
//         console.log(arr2d[i][y]);
//     }

function flatten(arr2d) {
    var flat = [];
    // My Algo Code
    for (var i = 0; i < arr2d.length; i++) {
        for (var y = 0; y < arr2d[i].length; y++) {
            flat.push(arr2d[i][y]);
        }
    }
    return flat;
}

var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]