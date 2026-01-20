// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"
  
const c = ["javascript", "react", "node", "mongodb", "express"];

let r1=c.filter(a=>a.length>5)
console.log(r1)

let r2=c.map(a=>a.toUpperCase())
console.log(r2)

let r3=c.find(a=>a==='react')
console.log(r3)

let r4=c.findIndex(a=>a==='node')
console.log(r4)