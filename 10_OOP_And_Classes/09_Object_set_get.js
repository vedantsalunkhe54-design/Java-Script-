const user ={
    _email: "Javascript@gmail.com",
    _password: "Java@123",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
    
}


const java = Object.create(user)

console.log(user.email);


