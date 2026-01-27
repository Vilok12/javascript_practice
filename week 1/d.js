// callback function : a function that sends a function as an argument to another function

function test1(a){
    console.log(a())
}
test1(function(){ return 42})

//  a is anonymous function and it is called by test1  and test1 is called by the application
//  a is anonymous function because it was sent as an argument by another function
