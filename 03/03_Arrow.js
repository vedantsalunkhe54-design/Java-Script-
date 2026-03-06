//+++++++++++++++++++++++++++++++++     This keyword          +++++++++++++++++++++++++++++++++++

const user={
    username:"rohit",
    age:35,

    gretting:function welcome(){
        console.log(`${this.username}, welcome to github`);
        
    }

}

user.gretting();

user.username="rohit kumar";

user.gretting();

//+++++++++++++++++++++++++++++++++     Arrow function and this keyword          +++++++++++++++++++++++++++++++++++


const user2=(num1,num2) => {  // Explicit return
    return num1 * num2;
}

const user1=(num1,num2) => num1 + num2; // Implicit return

console.log(user1(5,10));
console.log(user2(5,10));
