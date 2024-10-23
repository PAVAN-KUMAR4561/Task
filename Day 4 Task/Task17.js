// Use JavaScript's built-in method to prevent any changes to an object, and then try to modify it to see what happens.

const obj = { a: 1 };


Object.freeze(obj);
obj.a = 2;

console.log(obj);   //  { a: 1 }
