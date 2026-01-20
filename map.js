//   map is used for modification and filter is used for selection only

let sal=[53,74,63,90,42,23]
let r=sal.map(e=>e+=50)
console.log(r)

let rr=sal.filter(f=>f+=50)
console.log(rr)