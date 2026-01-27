// Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
// -------------------------------------------------------
// 🧪 Given Data:
//               const user = {
//                 id: 101,
//                 name: "Ravi",
//                 preferences: {
//                   theme: "dark",
//                   language: "en"
//                 }
//               };

// 🎯 Task
//     1. Create a shallow copy of user
//     2. Change:
//           i. name in the copied object
//           ii. preferences.theme in the copied object
//           iii .Log both original and copied objects
//           iv. Observe what changes and what doesn’t



const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
let x={...user}
x.name='vilok'
x.preferences.theme='light'
user.log='er'
x.log='beuvb'
console.log(user)
console.log(x)


//  we can modify elements of copied object by  {...obj,name='jegvuev',rno:12} like this we can modify the copied object
try{console.log(gh)}
catch(err){
    console.log('jrhtb')
}