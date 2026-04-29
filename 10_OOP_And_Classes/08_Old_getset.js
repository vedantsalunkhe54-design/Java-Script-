function user(email,pass){
    this._email = email
    this._pass = pass

    Object.defineProperty(this, "email", {
    get: function (){
        return this._email.toUpperCase()
    },
    set: function(value){
        this._email = value
    }

})

    Object.defineProperty(this, "pass", {
    get: function (){
        return this._pass.toUpperCase()
    },
    set: function(value){
        this._pass = value
    }
})

}

const vedant = new user ("vedant@123", "Vedant")

console.log(vedant);
