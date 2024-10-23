// Create a function that takes a score (0-100) and returns a letter grade (A, B, C, D, F) using if-else statements.

const students = [
  { name: "Alice", score: "95" },
  { name: "Bob", score: "82" },
  { name: "Charlie", score: "58" },
  { name: "David", score: "75" },
  { name: "Eva", score: "89" }
];
const num= students.map((student)=>{

    let numCon ={name:student.name,score: Number(student.score)};

// console.log(numCon);

if (numCon.score>90){
    numCon.grade="A";
}
else if(numCon.score>80){
    numCon.grade="B";
}
else if(numCon.score>60){
    numCon.grade="C";
}
else if(numCon.score>40){
    numCon.grade="D";
}
else{
    numCon.grade="F";
}

delete numCon.score;

return numCon;
})


const fillArr = num.filter((item)=>{
    return item.grade==="A"||item.grade==="B"||item.grade==="C";

})
console.log(fillArr);


