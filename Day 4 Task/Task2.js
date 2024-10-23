//  Given an array, remove all duplicate elements.

const Duparr = [1,2,3,4,3,2,1];

function removeDup(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index);
}
console.log(removeDup(Duparr));

function removeDup(arr){
    return [...new Set(arr)];
}
console.log (removeDup(Duparr));