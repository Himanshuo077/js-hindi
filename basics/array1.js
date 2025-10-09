const MCA_student = ['Himanshu', 'Prabhas', 'Sugandh','Sunil']
const BTech_student = ['Alok', 'Ankit', 'Saurabh']

// MCA_student.push(BTech_student)
// console.log(MCA_student);
// console.log(MCA_student[4][1]);

const all_student = MCA_student.concat(BTech_student)
// console.log(all_student);

const all_new_student = [...MCA_student,...BTech_student]
// console.log(all_new_student);

const another_array = [1,2,3, [4, 5, 6], 7, [8, 9]]

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);


console.log(Array.isArray("Himanshu"));
console.log(Array.from("Himanshu"));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

