//    //   Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const t = [32, 35, 28, 40, 50, 38, 30, 42];
let r1=t.filter(a=>a>35)
console.log(r1)
 
let r2=t.map(a=>(a*9/5)+32)
console.log(r2)

let r3=t.reduce((a,b)=>a+b)
console.log(r3/t.length)

let r4=t.find(a=>a>40)
console.log(r4)

let r5=t.findIndex(a=>a===28)
console.log(r5)