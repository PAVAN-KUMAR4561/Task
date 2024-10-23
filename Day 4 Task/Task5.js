//  Given an array and a target element, find the index of the target element.

// let arr=[10,20,30,40];
//   let input =prompt("please enter the value");
//    let index= arr.indexOf(input);

let arr=['10','20','30','40'];
function myFunction() {
    let input =prompt("please enter the value");
    let index= arr.indexOf(input);
    if (index !== -1) {
        document.getElementById("demo").innerHTML = `The index of "${input}" is ${index}.`;
    } else {
        document.getElementById("demo").innerHTML = `"${input}" is not found in the array.`;
    }
  }





