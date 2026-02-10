let myDate = new Date();

//console.log(myDate.toString());

// *************** The type of the Dates is object ************************

//console.log(myDate.toDateString());

// ********************** The Month starts form the 0 to 11*****************************************************

let newDate = new Date(2020,11,22);
// console.log(newDate);

// console.log(`so the current date is ${myDate} and my own created date is ${newDate}`);

newDate.toLocaleString('default',{
    weekday : 'long',
})

console.log(newDate);



