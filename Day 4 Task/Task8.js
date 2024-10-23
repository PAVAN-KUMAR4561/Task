//  Rotate an array to the left or right by a specified number of positions without creating a new array.

let arr = [1, 2, 3, 4, 5];
// console.log(rotateRight(arr, 2)); 
console.log(rotateLeft(arr, 2));  

// function rotateRight(arr, k) {
//     // k = k % arr.length; // Handle cases where k is greater than array length
//     for (let i = 0; i < k; i++) {
//         arr.unshift(arr.pop());  // arr.pop() to remove the last element and arr.unshift() to add it to the front.
//     }
//     return arr;
// }

function rotateLeft(arr, k) {
    k = k % arr.length; // Handle cases where k is greater than array length
    for (let i = 0; i < k; i++) {
        arr.push(arr.shift());  //  arr.shift() to remove the first element and arr.push() to add it to the end.
    }
    return arr;
}