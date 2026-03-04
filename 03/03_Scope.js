// // This is the GLOBAL SCOPE
// var c=300; // Shows '30'
// let a=100; // shows '100'

// if(true){ // This is the BLOCK SCOPE
//     var c=30;
//     let a=10;
//     const b=20;
//     console.log("Inside", a);
    
// }

// console.log(c); // This will print '30'
// console.log(a); // Shows error
// console.log(b); // Shows error

        // take the icescream ex. here the CHILD can take icescream from ADULT 
        // but not the ADULT can take icescream from the CHILD


//     function one(){         //ADULT function

//     const username="vedant" 


//         function two(){     //CHILD function

//         const website="github";
//         console.log(username);
//     }
//     console.log(website);  // throw error cause CHILD access ADULT
    
    
//     two()
// }
// one();

console.log(add(5));

function add(num){
    return num + 2
}


console.log(add3(5)); // shows error due to hoistic

const add3=function(num){
    return num + 3;
}


