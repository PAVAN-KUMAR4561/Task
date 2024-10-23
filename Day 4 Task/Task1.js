//  Given an array of strings, return a new array where each string is capitalized.

function capitalizefunc(arrvalue){
    return arrvalue.map((word)=> {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()})
}

// function capitalizefunc(arrvalue){
//     return arrvalue.map(word=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
// }

const arr=["apple","banana","cherry"];
let capitalize= capitalizefunc(arr);
console.log(capitalize);