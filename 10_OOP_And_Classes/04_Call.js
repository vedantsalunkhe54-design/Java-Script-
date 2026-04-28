function setUsername(username){
    this.username = username
    console.log("called"); //This gets called
    
}


function getUsername(username,email,password){

    //setUsername(username)

    //  * the 'CALL' method is used to explicitly call the function

    setUsername.call(this, username)

    this.email = email
    this.password =password
}

const acces =new getUsername("vedant", "vedant@123", 2345)
console.log(acces);

// Here when the log the output there is only email and password field no username field

