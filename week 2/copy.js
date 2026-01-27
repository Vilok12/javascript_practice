let a={n:'vk'}
let b=a
b.n='rjg3hbv'
console.log(a)
let c={...a}   //spread operator allows to make copies of objects 
c.n='ejhbjh'
console.log(c)
let k={add:{n1:123}}
let p=structuredClone(k)
p.add.n1=345
console.log(k)
console.log(p)



// shallow copy is spread operator   ==> {...obj}
// deep copy is structuredClone  ==>  structuredClone(obj)