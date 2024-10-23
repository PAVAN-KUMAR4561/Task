//  Given a nested array of varying depth, flatten it to a single-level array.

const arr=[1,[2,[3,[4]],5]];
const flattArray =arr.flat(Infinity);  // flat() will remove only one bracket
                    // flat(Infinity) remove all bracket
console.log(flattArray)