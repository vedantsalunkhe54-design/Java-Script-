const num =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNum=num.map( (val) => val* 10)
.map( (val2) => val2 + 1)
.filter( (val3) => val3 >40)

console.log(newNum);
