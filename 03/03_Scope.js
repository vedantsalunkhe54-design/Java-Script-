// This is the GLOBAL SCOPE
var c=300; // Shows '30'
let a=100; // shows '100'

if(true){ // This is the BLOCK SCOPE
    var c=30;
    let a=10;
    const b=20;
    console.log("Inside", a);
    
}

console.log(c); // This will print '30'
console.log(a); // Shows error
console.log(b); // Shows error

