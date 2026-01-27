// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
// const marks = {
//   maths: 78,
//   physics: 65,
//   chemistry: 82,
//   english: 55
// };

// Tasks:
    
// Calculate total marks
// Calculate average marks
// Find the highest scoring subject
// Add a new subject computer: 90

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
function total(){
    let s=0
    m=Object.values(marks)
    max=m[0]
    for (i of m){
        s+=i
        if (i>max){
            max=i
        }
    }
    avg=s/m.length
    console.log("total marks is:",s)
    console.log("average marks is:",avg)
    console.log("maximum marks is:",max)
    marks.computer=90
}
total()
