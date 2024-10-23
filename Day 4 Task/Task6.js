// Given an array of numbers, use some to check if any element is negative.

const arr=[1,-2,3,4];

let result=arr.some(value=>value<0);   // it gives true if negative value is present in array
console.log(result);