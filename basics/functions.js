// function addTwonumbers(number1, number2) {
//     console.log(number1 + number2);
    
// }
// addTwonumbers(24, 64)

// function addTwonumbers(number1, number2) {
//     return number1 + number2
// }

// const result = addTwonumbers(4, 6)
// console.log(result);


function loginuser(username = "Himanshu") {
    if (!username) {
        console.log("Please enter aa username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginuser("Sujit"));
console.log(loginuser("Mayank"));

