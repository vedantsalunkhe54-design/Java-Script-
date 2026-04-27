// Object is the ultimate hirearchy of js arry,string,funt all are child of Object


const hero =['Ironman', 'Superman']

const heroPower = {
    Ironman : "Blast",
    Superman : "FLy",

    getSupermanPower: function(){
       // console.log(`Super man Power is to : ${this.Superman}`);
    }
}

console.log(heroPower.getSupermanPower());

Object.prototype.Vedant = function(){
    console.log("Vedant has the ultimate super power ");
}

// So when we declare property in object we can acces it through string,array,funt,etc....

// heroPower.Vedant();
// hero.Vedant();

function print(){
    console.log("Can we acces this using object");
}

//print.Vedant()


Array.prototype.heyVedant = function(){
    console.log("This power is limited to array");
}

hero.heyVedant();
// heroPower.heyVedant(); // * We cannot acces array power here : error  *


//  !!!!!!!!!!!!! INHERATANCE !!!!!!!!!!!!!!!!

const user ={
    username : "Vedant",
    pass: 123
}

const teacher={
    isAvailable : true
}

const AssistantTeacher = {
    isPartTime: true
}

const TAteacher = {
    assignments : "js",
    __proto__:AssistantTeacher

}
teacher.__proto__ = user;

// Modern syntax

Object.setPrototypeOf(TAteacher, teacher)


let username1 = "Vedant       "

String.prototype.TrueLength = function(){
    console.log(`${this}`);
    console.log(`The true length is ${this.trim().length}`);
    
}
username1.TrueLength();
"HELLO".TrueLength();
" WELCOME ".TrueLength();
