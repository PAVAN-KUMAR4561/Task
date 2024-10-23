// Create two Promises that resolve with different strings after random time delays (between 1 and 3 seconds). Use Promise.all() to log both results when both Promises resolve.			


let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("Promise p1")

    },1000)
})
let p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("promise p2")

    },3000)
})
Promise.all([p1,p2])
.then((values)=>{
    console.log(values)
})
.catch((values)=>{
    console.log("error message");
})