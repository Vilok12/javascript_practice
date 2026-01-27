// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
    
// Use filter() to get only inStock products
// Use map() to create a new array with:  { name, totalPrice }
// Use reduce() to calculate grand total cart value
// Use find() to get details of "Mouse"
// Use findIndex() to find the position of "Keyboard"

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let r1=cart.filter(a=>a.inStock==true)     //to find to get only inStock products
console.log(r1)

let r2=cart.map(a=>[a.name,a.price])       //to create a new array with:  { name, totalPrice }
console.log(r2)

let r3=cart.reduce((a,b)=>a+b.price*b.quantity,0)     //reduce() to calculate grand total cart value
console.log(r3)

let r4=cart.find(a=>a.name=='Mouse')                 //to get details of "Mouse"
console.log(r4)

let r5=cart.findIndex(a=>a.name=='Keyboard')         //to find the position of "Keyboard"
console.log(r5)