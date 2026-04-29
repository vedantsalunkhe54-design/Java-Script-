const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(Math.PI)

 console.log(descriptor);


const myDetails  = {
    name : "Vedant",
    email: "vedant@123",
    pass : "js@123",
    isCoding: true,
    
    other : function(){
        console.log("Vedant's personal details")
    }
}

// console.log(Object.getOwnPropertyDescriptor(myDetails, "name"));

Object.defineProperty(myDetails , "name", {
    value: "Salunkhe",
    writable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(myDetails, "name"));

const change = Object.defineProperty(Math, "PI", {
    value: 5
})

console.log(change);

/*
    JavaScript does not allow changing Math.PI because:

    1: It ensures correct and consistent calculations
    2: It prevents bugs and broken programs
    3: It is locked internally (non-writable & non-configurable)
*/


for (const [key,value] of Object.entries(myDetails)) {
    if (typeof value !== 'function') {
            console.log(`${key} :- ${value}`);
    }

}


