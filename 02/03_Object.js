const mySum=Symbol("Key1")

const JsUser={
    name:"John",
    age:30,
    city:"New York",
    "is Admin": true,
    [mySum]: "MyKeyValue"
}

//console.log(JsUser)
// Accessing object properties

// console.log(JsUser.name) // Output: John
// console.log(JsUser["age"]);
// console.log(JsUser["is Admin"]) // Output: true

JsUser.Email="john@example.com"
//Object.freeze(JsUser) // This will prevent any modifications to the object

//JsUser.Email="john123@example.com"
 //console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello to objects");
}


JsUser.greetingTwo=function(){
    console.log(`Hi, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


 console.log(JsUser[mySum]); // Output: MyKeyValue

