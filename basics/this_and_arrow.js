//  const user = {
//     username : "Sujit",
//     price : 1000,

//     welcomeMessage : function () {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
//     }
//  }
//  user.welcomeMessage()
//  user.username = "Mayank"
//  user.welcomeMessage()

//  console.log(this); 
 
//---------------------------------------

//  function fname() {
//     let username = "Suraj"
//     console.log(this.username);
    
    
//  }
//  fname()


// --------------Arrow Function ------------- 
// const uname = () => {
//     let username = "Suraj"
//     console.log(this.username);
    
// }
// uname()

// const addNumber = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addNumber(4, 5));

//-----------Implicit Return --------------
// const addNumber = (num1, num2) =>  num1 + num2

// const addNumber = (num1, num2) =>  ( num1 + num2 )

//--------------Object Return --------------
const addNumber = (num1, num2) =>  ({username : "Monu"})
console.log(addNumber(4, 5));
