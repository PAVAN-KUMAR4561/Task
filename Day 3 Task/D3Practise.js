//  Promise

/*
let promise = new Promise(function(resolve,reject){

    console.log("This is from promise");
    resolve(56)

})

console.log("Hello one");
setTimeout(function(){
    console.log("Hello Two");
}, 2000 )
console.log("Hello Three");   

console.log(promise);

// OUTPUT
// Hello one
// Hello Three
// Hello Two 

*/



/*

let p1 = new Promise((resolve,reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
      //  console.log("I am a promise and I am resolved")
       resolve(true)
     
    },5000)
})

let p2 = new Promise((resolve,reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
      //  console.log("I am a promise and I am rejected")
    
       reject(new Error("This is an Error"))
    },5000)
})
// to get the value
p1.then((value)=>{
    console.log(value);   // true because it resolve
})

// to catch error
// p2.catch((error)=>{
//     console.log("some error occured in p2");
// })


// or you write both using then

p2.then((value)=>{
    console,log(value)
},(error)=>{
    console.log(error)
})

*/

//  Promise chaining

// let p1 =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved after 2 seconds");
//         resolve(56);

//     },2000)

// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve,reject)=>{
//         resolve("Promise 2")
//     })
//     return p2
// }).then((value)=>{
//     console.log("we are done");
//     return 2;     //its constant value but it is converted into promise
// }).then ((Value)=>{
//     console.log("Now we are pakka done");
// })

//  Async/Await
async function harry(){
let delhiWeather =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("27 degree");
    },2000)
})

let bangloreWeather = new Promise((resolve,reject)=>{
    srtTimeout(()=>{
        resolve("21 degree");
    },5000)
})

console.log("Fetching delhi weather plz wait")
let delhiw = await delhiWeather
console.log("fetched delhi weather:" + bangloreW)

console.log("Fetching Banglore weather plz wait")
let bangloreW= await bangloreWeather
console.log("fetched Banglore weather:" + bangloreW)
return [delhiw,bangloreW]
}
console.log("welcome to weather control Room");
let a= harry()
a.then((value)=>{
    console.log(value)
})