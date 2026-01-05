console.log("i m external js");


//! how to declare variable

// TODO var , const , let

//! var keyword - redeclartion and reinitialization is possible

var playerName;   // variable declartion

playerName = "rohit"; // variables initialization

console.log("player name is", playerName);

var age = 30;
     
console.log("age is " + age);

var age = 37; //! redeclaration

console.log(age)

//! let keyword - we cant do redeclartion  it is not possible
//! reinitialization is possible


 let MyName;  //variable declartion
 MyName = "Kesav"; // variable initialization
 console.log("my name is " + MyName); 

let flower = "lotus";
console.log(flower);

//error 
// let flower= "jasmine";
// console.log(flower);


//! const keyword - we cant do redeclartion and reinitialization and it is not possible


const pi = 3.14;
console.log(pi)
pi = 44
console.log(pi)