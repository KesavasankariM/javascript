const { Children } = require("react");

console.log("datatype in js")

//! Number

let num1 = 30;
console.log("num1 is" + num1);
let num2 = 40.8;
console.log("num2 is" + num2);

//! to print datatype - typeOf()

console.log(typeof (num1));
console.log(typeof (num2));

//!boolean 

let isPlayer = true;
console.log(isPlayer);
console.log(typeof isPlayer)


//! String 

let str1="good morning";
let str2='good afternoon';
let str3 = `good evening`;

console.log(str1);
console.log(str2);
console.log(str3);

console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);

//! undefined

let kesav;
console.log(kesav);
console.log(typeof kesav);

//! null 

let id = null ;
console.log(id);
console.log(typeof id)

//!bigint      

let big = 2n;
console.log(big);
console.log(typeof big);

//! parseInt()
let a = Number.parseInt("40.55")
console.log(a)

let b= "60";
console.log(b);
console.log(typeof b);


let c = Number.parseInt("50");
console.log(c)
console.log(typeof c)

let d = Number.parseInt("abc");
console.log(d)

let e = Number.parseInt("20abv");
console.log(e)


console.log(9/2);

//hoisting
console.log("hi")
console.log("hello")
console.log("bye")

// var kesava=10

// var kaavya=20