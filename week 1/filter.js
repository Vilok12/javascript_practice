//  write a function that can extract marks greater than 70 , packend into an array and return it
//  filter is used only for selection

marks=[53,74,63,90,42,23]
let r=marks.filter( function(ele){
    return ele>70
})
console.log(r)

//    or  

let rr=marks.filter(element=>element>70)
console.log(rr)

//  find all marks b/w 30 and 90
let rrr=marks.filter(element=>element>=30 && element<=90)
console.log(rrr)