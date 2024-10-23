//Create a function named getRandomNumber that returns a Promise. The Promise should resolve with a random number between 1 and 100. If the number is less than 50, reject the Promise with an error message "Number is too low." Use .then() to log the number and .catch() to log the error message.


function getRandomNumber(){
    return new Promise((resolve,reject)=>{
       const randomnum = Math.floor(Math.random()*100)+1;
       if(randomnum<50){
        reject("number is too Low");
       }
       else
           resolve(randomnum)
        });
}

getRandomNumber().then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
})
