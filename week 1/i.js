
// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
// const marks = [78, 92, 35, 88, 40, 67];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92

const m = [78, 92, 35, 88, 40, 67];

let r1=m.filter(a=>a>=40)            //to find marks ≥ 40 (pass marks)
console.log(r1)

let r2=m.map(a=>a+5)                  //to add 5 grace marks to each student
console.log(r2)

let r3=m.reduce((a,b)=>a>b?a:b)         //to find highest mark
console.log(r3)

let r4=m.find(a=>a<40)                   //to find first mark below 40
console.log(r4)

let r5=m.findIndex(a=>a===92)             //to find index of mark 92
console.log(r5)