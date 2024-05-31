let age = "1abc"
console.log(typeof age);
let valueinnumber = Number(age);
console.log(typeof valueinnumber);
console.log(valueinnumber);//=>converts string into number

/*
"33" => 33
"33abc" => NaN
True => 1;False => 0
*/
let isLoggedIn = 0;
let BooleanisLoggedIn = Boolean(isLoggedIn);
console.log(BooleanisLoggedIn)// converts 0 into false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber )//=> converts 33 into string