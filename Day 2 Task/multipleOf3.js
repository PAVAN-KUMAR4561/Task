// Create a function that takes an array of numbers and returns a new array that contains only the numbers that are multiples of 3.


let arr= [2,3,4,5,6,9,];
for(let i=0;i<arr.length;i++){
    if(arr[i]%3==0){
        console.log(arr[i]);
    }
}