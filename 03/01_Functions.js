function abc(){
    //console.log("This is the example of the function");
}

abc()
abc() // priniting function two times 

function add(Number1 , Number2){
    //console.log(Number1 + Number2);
}

//add(4,5)// Paramaterized Function

const result = add(5 ,10);

//console.log(result); // Here the o/p is undefined 

function substract(Number3,Number4){
    let value = Number3 - Number4;
    return value;

    console.log("THIS WILL NOT GET EXECUTED");
    
}
const value = substract(10,5) 
console.log("Value" ,value);

// function Login(username){
//     return `${username} Just logged in`;
// }

//console.log(Login("Vedant"));

function Login(username){
    if(username===undefined){
        console.log("Please enter valid name");
        return
    }
    return `${username} Just logged in`;
}


console.log(Login()); // IF NO VALUE IS PASSED IT SHOWS undefined   
