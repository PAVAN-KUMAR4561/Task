// Write a function called processNumber that accepts a number. The function should return a Promise that first doubles the number, then adds 10, and finally resolves with the result. Use chaining to perform these operations and log the final result.

let processNumber = new Promise((resolve, reject) => {

    let num = 5;
    resolve(num * 2);
}).then((value) => {
    return (value + 10);
}).then(value => {
    console.log(value);
})
