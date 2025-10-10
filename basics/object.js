const mysym = Symbol("key1")

const jsuser = {
    name:"Himanshu",
    age :22,
    isLoggIn : false,
    [mysym] : "mykey1",
    email :"saurabh@gmail.com"

}

// console.log(jsuser.name);
// console.log(jsuser["email"]);
// console.log(jsuser[mysym]);


jsuser.age = 23
// Object.freeze(jsuser)
// jsuser.age = 24
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello js user");
    
}

console.log(jsuser.greeting());

jsuser.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`);
    
}
console.log(jsuser.greetingtwo());
