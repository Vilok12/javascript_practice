//  destructure of an array
sk=[1,2,3]
let [a,b,c]=sk
console.log(a)

//  inserting at start
sk.unshift(6,7)

//  inserting at end
sk.push(9,10)

//  inserting at an index  :  splice(index,delete count,elements)
sk.splice(2,0,8)

//  delete at start 
sk.shift()

//  delete at end
sk.pop()

//  delete at an index  :  splice(index,delete count)  if we keep (2,2) it deletes 2 elements from index 2 if (3,4) then 4 elements from index 3 is deleted
sk.splice(2,3)
console.log(sk)