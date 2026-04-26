// THe 'THis' keyword is used for calling the current instance

const bakwas ={
    username: 'Rohan',
    id: 245,
    salary: 45000,

    getuserdet:function(){
        console.log('got user details');
        console.log(this);
        // By printing 'This' keyword you will get all details like username,id,salary,fn't_name;
        
    }
}
console.log(bakwas.username);
console.log(bakwas.getuserdet());



function funt1(username , loginCount, signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn

    return this
}

const user1 = funt1('Vedant', 10, true)
const user2 = funt1('Hitesh', 2, false)

//console.log(user1);

// As you can see that we we print user1 value it still overwrite the value and print the user2 value 

// The 'new' keyword creates instances(Copies) of variable

const user3 = new funt1('Rohit', 4, true)
const user4 = new funt1('Pranav', 7, false)

//console.log(user3);   // now the code dosen't overwrite and print the user1 value



