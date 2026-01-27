//  ravi made a promise to kiran that he will call him after 5 min
let a=true
//  create promise
let promise_object=new Promise((fulfill,reject)=>{ 
    setTimeout(()=>{
        if (a==true){
            fulfill('hey how are you')
        }
        else{
            reject('sorry')
        }
    },2000)
})


// consume promise
promise_object
.then((m)=>console.log('message is :',m))    //then is called by fullfill
.catch((n)=>console.log('error is :',n))     //catch is called by reject
console.log('hegjc')