let marks=[1,2,3,4,5]
let r=marks.reduce((a,b)=>(a+b))
console.log(r/marks.length)

//   for small number
let s=marks.reduce((a,b)=>a<b?a:b)
console.log(s)
 
//  