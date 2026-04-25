const promise1 = new Promise(function (resolve,reject){
    //console.log("Vedant");
    resolve();
})

promise1.then( () => {
   // console.log("Salunkhe");
})


new Promise( ( resolve, reject ) => {
    //console.log("Async tak");
    resolve();
    
})
.then( () => {
    //console.log("Async tak resolved ");
    
})


const promise3  = new Promise(function(resolve,reject){
    setTimeout(function(){
        //resolve({username:'Vedant',pass:123})
    },100)
})

promise3.then(function(user){
    //console.log(user);
    
})

const promise4 = new Promise( function (resolve, reject){
     setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: 'Vedant', pass:'Vedant@123456'})
        }
        else{
            reject('ERROR, Something went wrong')
        }
        
        
    },1000)
})

promise4.then( (user) =>{
    //console.log(user);
    return user.username
} ).then( (username) => {
  //  console.log(username);
}).finally( () => {
   // console.log('The promise is either resolved or rejected');
    
})


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: 'Vedant', pass:'Vedant@123456'})
        }
        else{
            reject('ERROR, Something went wrong')
        }
        
        
    },1000)
})
    

async function Funt(){
    const abc = await promise5;
   // console.log(abc);
 
}

Funt()

async function getAllusers(){

        try {

            const respose =await fetch("https://jsonplaceholder.typicode.com/users")
            const data =await respose.json()
            console.log(data);
            

        } catch (error) {
            
            console.log("E : ",error);
            
        }
}

   getAllusers()

fetch("https://jsonplaceholder.typicode.com/users")
.then( (respose) => {
    return respose.json();
}).then( (data) => {
    console.log(data);
}).catch( (Error) => {
    console.log(Error);
    
})