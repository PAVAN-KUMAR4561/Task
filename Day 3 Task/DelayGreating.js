// Write a function called delayedGreeting that returns a Promise. The Promise should resolve with the string "Hello, World!" after a delay of 2 seconds. Call the function and log the result when the Promise resolves.

function delayedGreeting(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("hello World");
        },2000)
    })
}

delayedGreeting().then((value)=>{
    console.log(value);
})