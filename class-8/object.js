// OBJECT

/**

    JavaScript menyediakan beberapa method bawaan untuk mengambil isi dari sebuah object, yaitu:

    Object.keys() → mengambil semua key.
    Object.values() → mengambil semua value.
    Object.entries() → mengambil key dan value sekaligus.

    Ketiga method ini akan menghasilkan Array, sehingga dapat digunakan bersama method array seperti forEach(), map(), atau filter().
 */

const student = {
  name: "Vincent",
  age: 25,
  major: "Computer Science",
};

// Object.keys() Digunakan untuk mengambil seluruh key dari object.

// console.log(Object.keys(student));
// const keys = Object.keys(student);
// for (const key of keys) {
//   console.log(key);
// }

// Object.values() Digunakan untuk mengambil seluruh value dari object.

// console.log(Object.values(student));
// const values = Object.values(student);
// for (const value of values) {
//   console.log(value);
// }

// Object.entries() Digunakan untuk mengambil key dan value sekaligus.

// console.log(Object.entries(student));

// for (const [key, value] of Object.entries(student)) {
//   console.log(`${key} : ${value}`);
// }
