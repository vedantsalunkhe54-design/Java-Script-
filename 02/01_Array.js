// const arr=[1,2,3,4,5,'Vedant',"Salunkhe",true,false];

// console.log(arr);
// console.log(arr.length);
// console.log(arr[5]);

 const newarr= new Array(4,5,6,7,8);

// console.log(newarr);
// console.log(newarr.length);

// newarr.push(9);
// console.log(newarr);

// newarr.pop();
// console.log(newarr);

// ********************* The unshift operation is used to inserting element at 1st Index *************************

// newarr.unshift(7);

// console.log(newarr);

// ********************* The shift operation is used to removing element at 1st Index *************************

// newarr.shift();
// console.log(newarr);

// ********************* Join *************************

const Joinarr = newarr.join()
// Here the type of Joinarr is string because the join method converts the array into a string by concatenating all the
// elements together, separated by a specified separator (which is a comma by default). So, when you use the join method
// on an array, it returns a string representation of the array's elements.
// console.log(Joinarr);
// console.log(typeof Joinarr);

// ********************* Slice & Splice *************************

const Slicearr = newarr.slice(1,4);
console.log(Slicearr);
console.log(newarr);

// Splice
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const Splicearr = newarr.splice(1,2,10,11,12);
console.log(Splicearr); // It will return the removed elements
console.log(newarr); // It will show the modified array