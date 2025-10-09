const number = [10, 20, 30, 40, 50]
// console.log(number[2]);

const myarray = new Array(1, 2, 3, 4, 5)
// console.log(myarray[1]);

// myarray.push(6)
// myarray.push(7)
// myarray.pop()
// myarray.unshift(8)
// myarray.shift()
// console.log(myarray.includes(8));
// console.log(myarray.indexOf(3));

 
const newArray = myarray.join()
// console.log(newArray);
// console.log(typeof newArray);

console.log("A ",myarray);

const myn1 = myarray.slice(1,3)
console.log(myn1);
console.log("B", myarray);

const myn2 = myarray.splice(1,3)
console.log("C", myarray);

console.log(myn2);