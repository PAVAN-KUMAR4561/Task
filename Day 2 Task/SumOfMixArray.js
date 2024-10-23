let a=["1",2,"3",4];
let num=a.map(Number);

const reduce_func = (h1,h2) =>{
    return h1 + h2;
}
let newarr = num.reduce(reduce_func)     // Reduce method add all elements and give single element    // reduce method reduce the array into single value
console.log(newarr)