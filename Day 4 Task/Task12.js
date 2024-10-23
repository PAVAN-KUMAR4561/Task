//  Write a function that counts each character in a given string and returns an object representing the character counts.

function countCharacters(str) {
    const charCount = {};
    
    for (let char of str) {
        // If the character already exists in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // If the character doesn't exist, initialize its count to 1
            charCount[char] = 1;
        }
    }

    return charCount;
}
const result = countCharacters("hello world");
console.log(result);



// const str ="This is String";

// const count={};

// function countingChar(str){
//     for(let i in str){
//         if(i!==''){

//         }
//     }
// }