//

const students = [
    { name: "Alice", scores: { math: 85, science: 92, english: 78 } },
    { name: "Bob", scores: { math: 90, science: 88, english: 94 } },
    { name: "Charlie", scores: { math: 78, science: 85, english: 80 } },
    { name: "David", scores: { math: 92, science: 95, english: 91 } },
    { name: "Eve", scores: { math: 88, science: 79, english: 85 } }
  ];
  
  // average scores for each subject
  const subjectTotals = {};
  const studentCount = students.length;
  
  // Iterate through each student
  students.forEach(student => {
    for (const [subject, score] of Object.entries(student.scores)) {
      if (!subjectTotals[subject]) {
        subjectTotals[subject] = { total: 0, count: 0 };
      }
      subjectTotals[subject].total += score;
      subjectTotals[subject].count += 1;
    }
  });
  
  // average scores
  const subjectAverages = {};
  for (const [subject, { total, count }] of Object.entries(subjectTotals)) {
    subjectAverages[subject] = total / count;
  }
  
  // student with the highest total score
  let highestScorer = null;
  let highestScore = 0;
  
  students.forEach(student => {
    const totalScore = Object.values(student.scores).reduce((acc, score) => acc + score, 0);
    if (totalScore > highestScore) {
      highestScore = totalScore;
      highestScorer = student.name;
    }
  });
  
  //new array of objects with student names and average scores
  const studentAverages = students.map(student => {
    const totalScore = Object.values(student.scores).reduce((acc, score) => acc + score, 0);
    const averageScore = totalScore / Object.keys(student.scores).length;
    return { name: student.name, averageScore };
  });
  
 
  console.log("Subject Averages:", subjectAverages);
  console.log("Highest Scorer:", highestScorer);
  console.log("Student Averages:", studentAverages);
  