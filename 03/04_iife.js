// +++++++++++++++++++++++   Immediately Invoked Function Expression (IIFE)    ++++++++++++++++++++++++++++++++++

(function chai() {
    console.log("Hello from IIFE!");
})();

// Output: Hello from IIFE!

( (name)=>{
    console.log(`hello ${name}`);
    
})("Vedant");
// Output: hello Vedant