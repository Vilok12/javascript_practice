let s=[
    { sno:1,name:'vk',age:19},{ sno:2,name:'suuu',age:30},{sno:3,name:'rohh',age:25}
]

//  find all ages less than 26
let r1=s.filter(s=>s.age<26)
console.log(r1)

 
//  increment age by 2 for manoj
let r2=s.map(s1=>{ if(s1.name==='vk'){ return s1.age=s1.age+2}})
console.log(r2)
  
//  find sum of all ages
let r3=s.reduce((a,b)=>a+b.age,0)
console.log(r3)