// Write a function that converts an object into an array of key-value pairs.

function objectToArray(obj) {
    return Object.entries(obj);
}
const exampleInput = { a: 1, b: 2, c: 3 };

const output = objectToArray(exampleInput);
console.log(output); 
