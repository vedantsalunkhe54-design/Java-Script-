const value={}

value.email="john@example.com";
value.password="key123";

const info={
    email:"Vedant@gmail.com",
    name:"Vedant"
}

// console.log(value);
// console.log(info);

const val1={4:'a',5:'b'};
const val2={3:'a',2:'b'};
const val3={6:'a',1:'b'};

const val={...val1, ...val2, ...val3}
console.log(val);

console.log(Object.keys(info));
console.log(Object.values(info));


