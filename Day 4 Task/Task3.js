//  Given an array, create an object that counts the occurrences of each element.


// function countOccurrences(arr) {
//     const counts = {};
    
//     arr.forEach(item => {
//         counts[item] = (counts[item] || 0) + 1;
//     });
    
//     return counts;
// }


let count=0;
function countOccurrences(arr){
    for(let i=0;i<arr.length;i++){
        let count=0;
        let visited=-1
        for(let j=i+1;j<arr.length;j++)
        if(arr[i]==arr[j]){
            count++;
            arr[i]=visited;
        }
        if(a[i!=visited])
           console.log(arr[i]+" "+count)
    }

    // for(let i=0;i<arr.lenght;i++){
    //     console.log(arr[i]+" "+count)

    // }
   
}
const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
const result = countOccurrences(array);
console.log(result);
