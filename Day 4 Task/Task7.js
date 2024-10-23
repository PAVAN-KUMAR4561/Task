//  Given two arrays, find the elements that are in one array but not the other.


function findUniqueElements(arr1, arr2) {
    const uniqueToArr1 = arr1.filter(element => !arr2.includes(element));
    const uniqueToArr2 = arr2.filter(element => !arr1.includes(element));
    const unique= uniqueToArr1.concat(uniqueToArr2);
    return unique;
}

const array1 = [1, 2, 3];
const array2 = [2,4];

const result = findUniqueElements(array1, array2);
console.log(result); 
