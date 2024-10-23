// Create a function that takes an array of values and returns an array of their corresponding boolean values. For example, ["", 0, null, "hello", 42] should return [false, false, false, true, true].			


let arr= ["", 0, null, "hello", 42];
// arr.forEach((element)=>{
//     console.log(Boolean(element));
// })

for(let i=0;i<arr.length;i++){
    console.log(Boolean(arr[i]))
}