//+++++++++++ Date +++++++++

// console.log(Date);

const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 8, 24)
// console.log(myCreatedDate.toDateString());

// let MycreatedDate = new Date(2025, 7, 12, 1, 9)
// console.log(myCreatedDate.toLocaleString());

// let MycreatedDate = new Date("2025-03-24")
// console.log(myCreatedDate.toLocaleString());

let MycreatedDate = new Date("10-12-2025")
// console.log(MycreatedDate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(MycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);


newDate.toLocaleString('default',{
    weekday: "long"
})



