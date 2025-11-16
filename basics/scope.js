// let a = 300

// if( true ) {
//     let a = 20
//     const b = 30
//    console.log("INNER", a);
   
// }

// console.log(a);
// console.log(b);


//+++++++++++ Nested Function +++++++++ 

// function one() {
//     const username = "Hitesh" 

//     function two() {
//         const website = "Google"

//         console.log(username);
        
//     }
//     // console.log(website);

//     two()
    
// }
// one()


// +++++++++++++++++++++++++++++++++++

// if ( true ) {
//     const username = "hitesh"

//     if (username === "hitesh") {
//         const website = " youtube"
//         console.log(username + website);
        
//     }
//     // console.log(website);
    
// }
// console.log(username);

// ++++++++++++ Interesting +++++++++++++

console.log(addOne(5))
function addOne(num) {
    return num + 1
}


const addTwo = function (num) {
    return num + 2
}
addTwo(5)