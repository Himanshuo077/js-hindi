const number =  new Object()
const number1= {}

// console.log(number1);

number1.name = "Satish"
number1.email = "satish@gmail.com"
number1.isLoggIn = false

// console.log(number1);


const regularuser = {
    email : "golu@gmail.com",
    name : "Golu",
    fullname : {                                       
        userfullname : {
            firstname : "Manish",
            lastname : "kumar"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id : 1,
        email : "p@gmail.com"

    },
    {

    },
    {

    }
]

user[1].email
console.log(number1);

console.log(Object.keys(number1));
console.log(Object.values(number1));
console.log(Object.entries(number1));

