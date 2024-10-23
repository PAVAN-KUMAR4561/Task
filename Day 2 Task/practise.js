
/*
let num = Number("123");
console.log(num, typeof num);    // Explicit type conversion



//  Type coercion

let num2;

console.log(num2,typeof num2);

num2=8;
console.log(num2,typeof num2);

num2 = num2 +""                  // number converted to string and concatinate
console.log(num2, typeof num2);
num2= num2-2;                    // String in converted to num and subtract
console.log(num2, typeof num2);    

num2=!num2;

console.log(num2,typeof num2);

console.log(Boolean(-4));   //  0, null, undefined. will give false and all other number give true

*/

// ****   LOOPS   ****


// let num =[3,54,1,2,4]

// for(let i=0;i<num.length;i++){      //   print all array elements
//     console.log(num[i])
// }


//  for Each

// num.forEach((element)=>{
//     console.log(element*2)      // all array elements multiplied by2 and print
// })


// let num2=[4,5,6,7,8]
// num2.forEach((element)=>{
//     console.log(element**2)
// })

// Array.from


// let name= "Pavan Kumar";
// let arr= Array.from(name);   // convert string to array
// console.log(arr);



// for..of 

// let num3=[4,8,6,7,2]
// for(let i in num3){
//     console.log(i)
// }

//for ..in 

// let num3=[4,8,6,7,2]
// for(let i in num3){
//     console.log(num3[i])
// }



//   ***** MAP, FILTER, REDUCE  ****


// Array map Method       

//  Diff bw map and forEach is 
// map return new array
// forEach return same array

/*let arr = [45,23,21]
let a= arr.map((value,index,array)=>{
    
    return value +index;
})
console.log(a)
*/
let a= arr.map((value,index)=>{
    return value+index;
})
console.log(a)


//  Array filter method


// let arr=[45,8,67,5,4];
// let a=arr.filter((value)=>{
//     return value<10;       //filter the values in the array and return the values according to condition
// })
// console.log(a);


//ARRAY REDUCE METHOD

// let arr=[1,2,3,5,2,1]
// const reduce_func = (h1,h2) =>{
//     return h1 + h2;
// }
// let newarr = arr.reduce(reduce_func)       // reduce method reduce the array into single value
// console.log(newarr)



