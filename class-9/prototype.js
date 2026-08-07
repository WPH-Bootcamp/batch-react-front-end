// PROTOTYPE

// 1. Prototypal Inheritance
// Object di JavaScript dapat mewarisi property dan method dari object lain melalui prototype.

const person = {
  greet() {
    console.log("Hello World!");
  },
};

const student = Object.create(person);

student.name = "Vincent";
student.score = 100;

// console.log("person", person);
// console.log("student", student);

// 2. Native Prototypes
// Semua object bawaan JavaScript memiliki prototype, seperti Array, String, dan Date.

// Array Prototype
// const numbers = [1, 2, 3];

// console.log(numbers.length);
// console.log(numbers.includes(2));
// console.log(numbers.join("-"));

// Menambahkan method baru
Array.prototype.first = function () {
  return this[0];
};

const numbers = [10, 20, 30];

console.log(numbers.first());
