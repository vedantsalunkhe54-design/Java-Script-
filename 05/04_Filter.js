let arr=[1,2,3,4,5,6,7,8,9,10]

const Mycoding = arr.filter( (item) => item > 3)

// console.log(Mycoding);


// The below code will not work and show [] cause its is written in brackets


const oldNums=arr.filter( (val) => {
    val < 3
})

//console.log(oldNums);


const newNums=arr.filter( (val) => {
    return val < 3    // when we use the return keyword the code will work
})

//console.log(newNums);


// without return keyword

const futureNums=[]

arr.forEach( (val) => {
    if(val > 5){
        futureNums.push(val)
    }
})

console.log(futureNums);

