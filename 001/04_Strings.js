const name="Vedant"
const age=20

//console.log(name +  " " + age + " power");

// This types of creating "Strings" is outdated 


//Instad we using "String Interpolation"

//console.log(`Hello My name is ${name} and my age is ${age}`);

// here we use ` `(backticks) here we create placeholders and we can inject variables 

const abc = new String('Programming');

// console.log(abc);
// console.log(abc.toUpperCase());
// console.log(abc.toLowerCase());

const newString = abc.substring(0,4)

// console.log(newString);

// const badString= abc.slice(-11,4)

// console.log(badString);

const newStringOne= "  Vedant   "

console.log(newStringOne);

const TrimString= newStringOne.trim();

console.log(TrimString);

const url="https//:Vedant-Salunkhe-Website-%&"

console.log(url.replace('%&', 'c'));

console.log(url.split('-'));


