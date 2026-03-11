

for (let i = 0; i <= 10; i++) {
    //console.log(`numbers are ${i}`);
}

//************************    For Array **************************************

array=['Batman','Superman','Ironman']

for (let i = 0; i < array.length; i++) {
    //console.log(array[i]);
}


//___________________________   Multi Dimension Array   ______________________________
// ALSO TABLE UPTO 10 NUMBERS


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        //console.log(`${i} * ${j} = ${i*j}`);
    }
}


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!     Break & Continue !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

for (let i = 0; i <= 10; i++) {
    if(i==5){
        //console.log(`5 number detected`);
        break;
        
    }
    //console.log(i);
  
    // This will break all code and the number will only print upto 5 numbers only
}

for (let i = 0; i <= 10; i++) {
    if(i==5){
        console.log(`5 number detected`);
        continue;
        
    }
    console.log(i);
  
    // This will Skip the Number 5 and will print other numbers
}

