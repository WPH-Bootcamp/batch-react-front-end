// Destructuring

/*
Destructuring Assignment adalah fitur JavaScript yang digunakan untuk mengambil nilai dari Array atau Object dan langsung menyimpannya ke dalam variabel.

Tanpa destructuring, kita harus mengambil data satu per satu.
*/

// DESTRUCTURING OBJECT
// Tanpa Destructuring
// const student = {
//   name: "Vincent",
//   age: 25,
//   major: "Computer Science",
// };

// const name = student.name;
// const age = student.age;
// const major = student.major;

// console.log(name);
// console.log(age);
// console.log(major);

// Dengan Destructuring
// const student = {
//   name: "Vincent",
//   age: 25,
//   major: "Computer Science",
// };

// const { name, age, major } = student;

// console.log(name);
// console.log(age);
// console.log(major);

// const employee = {
//   name: "Budi",
//   salary: 8000000,
// };

// const { name: employeeName, salary: employeeSalary } = employee;

// console.log(employeeName);
// console.log(employeeSalary);

// DESTRUCTURING ARRAY
// const colors = ["Red", "Green", "Blue"];
// const [first, second, third] = colors;

// console.log(first);
// console.log(second);
// console.log(third);

// Melewati Array
// const colors = ["Red", "Green", "Blue"];

// const [first, , third] = colors;

// console.log(first);
// console.log(third);
