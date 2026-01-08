// var a=10;
// console.log(a)
// var a=100;
// console.log(a)

// let b=20;
//  console.log(b);
//  b=200;
//  console.log(b);

// const c=30;
// console.log(c)
// const c= 300;
// console.log(c)


var a;
let b;
// const c;// not allowed
console.log(a)
console.log(b)


//! scope

var z=10;
let g=20;
const l= 70;


console.log(z,g,l + "-this is global scope ")

{
    var s=500; //var shuold not behave like blockscope

    let b=89;
    console.log( b + "-this is block scope")
    console.log(z,g,l )
}
console.log(s);
function abc(){

    var f=67;
    let hi=90;
    const v=55;



    let h=67;
    console.log(h + "-this is functional scope or local scope")
     console.log(z,g,l )
     console.log(s);
     
}
abc()
// throws error-because we only access in fuctional scope
// console.log(f)
// console.log(hi)
// console.log(v)