// stu={name:'vk',roll:42,sec:'e'}
// stu.city='hyd'
// Object.freeze(stu)
// stu.name='vilok'
// console.log(stu)
// console.log(Object.keys(stu))
// console.log(Object.values(stu))
// test={
//     a:1,b:2,c:3
// }
// let {x,b,c}=test
// console.log(x)
let stu={name:'vk',roll:42,sec:'e',address:{ city:'hyd',pin:500062},marks:[43,64,46,86],
gt:function(){
    console.log(stu.roll)
},avg:function(){
let a=0
for (i of stu.marks){
    a+=i
}
console.log(a/stu.marks.length)
return a/stu.marks.length
} }
console.log(stu.address.pin)
stu.gt()
console.log(stu.name)
console.log(stu.avg())



