const num = [1, 2, 3]

let newNum = num.reduce( (acculamotor, current_value) => acculamotor + current_value , 0)

console.log(newNum);


const Shoppingcart=[
    {
        item:"js course",
        price: 2999
    },
    
    {
        item:"py course",
        price: 999
    },
    
    {
        item:"mobile dev course",
        price: 6999
    }, 
    
    {
        item:"AI-ML course",
        price: 12999
    },
]

const TotalPrice = Shoppingcart.reduce( (acc, item) => acc + item.price,0)

console.log(TotalPrice);

