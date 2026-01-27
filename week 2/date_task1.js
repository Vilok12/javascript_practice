// Assignment 1: Date Creation & Extraction (Beginner)
// ---------------------------------------------------
// Tasks:
//        1. Create a Date object for current date & time.
//        2. Extract and display:
//                     * Year
//                     * Month (human readable)
//                     * Date
//                     * Day of week
//                     * Hours, minutes, seconds

//       3. Display the date in this format:
//                     DD-MM-YYYY HH:mm:ss

let today=new Date()
console.log('year:',today.getFullYear())
console.log('month:',today.getMonth())
console.log('date:',today.getDate())
console.log('day:',today.getDay())
console.log('hours,minutes,seconds:',today.getHours(),today.getMinutes(),today.getSeconds())
console.log(today.getDate(),'-',today.getMonth(),'-',today.getDate(),' ',today.getHours(),'-',today.getMinutes(),'-',today.getSeconds())

// we can also do in other way

let dd=currentDate.getDate();
let mm=currentDate.getMonth()+1;
let yyyy=currentDate.getFullYear();
let hh=currentDate.getHours();
let min=currentDate.getMinutes();
let ss=currentDate.getSeconds();
let formattedDate=`${dd}-${mm}-${yyyy} ${hh}:${min}:${ss}`;
console.log(formattedDate)