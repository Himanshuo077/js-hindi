
//Primitve
// string, number, null, Boolean, undefined, BigInt, Symbol 

// let fullname = 'sonu';
// console.log(fullname);

// let Serial_number = 1;
// console.log(Serial_number);

// console.log(null);
// console.log(undefined);

// let isLoggin = true;
// console.log(isLoggin);

// let Bignumber = 6736135178135;
// console.log(Bignumber);




//Non-primitive
//Reference

//Array, object, function

// const name = ['Sonu','Manish','Khushi','Tau'];
// console.log(name);

// let myobj={
//     name :'khushi',
//     age :24,

// }
// console.log(myobj);

// const myfunction = function(){
//     console.log("MBA");

// }


//---------------------------------------------
// Stsck(Primitive), Heap(Non-primitive)

let myname="Himanshu"
let anothername=myname
anothername="Priyanshu"

console.log(myname);

console.log(anothername)

let userone ={
    email:"hksingh7456@gmail.com",
    upi:"7864539792"
}

let usertwo = userone

usertwo.email="himanshu6745@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

