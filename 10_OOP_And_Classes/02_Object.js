function multipy5(num){
    this.num = num
    return num * 5;
}

multipy5.power=2;

console.log(multipy5(3));
console.log(multipy5.power);
console.log(multipy5.prototype);

function Item(itemName, itemPrice){
    this.itemName = itemName;
    this.itemPrice = itemPrice
}

let chai = new Item("chai", 25) // if we dont use 'new' keyword it shows undefined
let tea  =new Item("Tea", 50)
console.log(chai);
console.log(tea);

Item.prototype.increment = function(){
    this.itemPrice++
    console.log(this.itemPrice);
    
}

Item.prototype.printME = function(){
    console.log(`The price is ${this.itemPrice}`);
}

chai.printME() // output: The price is 25
tea.increment() // output: 51




