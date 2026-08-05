// ARRAY

/**
 * Array adalah struktur data yang digunakan untuk menyimpan banyak data dalam satu variabel.

Setiap data di dalam array disebut element, dan setiap element memiliki index yang dimulai dari 0.
 */

// console.log(fruits.length); // Jumlah element dalam array

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]); // Mengakses element array menggunakan index
// }

// for (let index in fruits) {
//   console.log(fruits[index]); // Mengakses element array menggunakan for...in
// }

// for (let fruit of fruits) {
//   console.log(fruit); // Mengakses element array menggunakan for...of
// }

// console.log(fruits[2]);
// console.log(fruits[4]);
// console.log(fruits[5]); // undefined, karena index 5 tidak ada dalam array

// console.log(fruits);
// fruits[3] = "kiwi"; // Mengubah element array pada index 3
// console.log(fruits);

// console.log(fruits[(2, 4)]);

// const carts = ["iPhone 17", "apple", 15000000, true];

// ARRAY MULTIDIMENSI

// const scores = [
//   ["Vincent", 100],
//   ["Andi", 90],
//   ["Thomas", 95],
// ];

// ARRAY METHODS

/**
 * JavaScript menyediakan banyak method bawaan untuk mengolah array.

    Method-method ini membantu kita menambah, menghapus, mencari, maupun mengubah isi array.

    Method yang paling sering digunakan:

    push()
    pop()
    unshift()
    shift()
    includes()
    indexOf()
    join()
    slice()
    splice()
 */

// const fruits = ["apple", "banana", "orange", "grape", "mango"];
// .push() Menambahkan data di akhir array.
// fruits.push("grape", "mango");

// .pop() Menghapus data terakhir.
// fruits.pop();

// .unshift() Menambahkan data di awal array.
// fruits.unshift("cherry");

// .shift() Menghapus data pertama.
// fruits.shift();

// .includes() Mengecek apakah suatu data ada di dalam array.
// console.log(fruits.includes("apple"));

// .indexOf() Mencari index suatu data.
// console.log(fruits.indexOf("banana"));

// .join() Menggabungkan seluruh isi array menjadi string.
// console.log(fruits.join("-")); // apple-banana-orange
// console.log(fruits.join("_")); // apple_banana_orange

// .slice() Mengambil sebagian isi array tanpa mengubah array asli.
// console.log(fruits.slice(1, 3));

// .splice() Menambah, menghapus, atau mengganti data pada array.
// console.log(fruits.splice(1, 1));

// console.log(fruits);

/**
 * Soal

    Buat sebuah array kosong bernama shoppingCart.

    Lakukan operasi berikut secara berurutan:

    Tambahkan "Laptop".
    Tambahkan "Mouse".
    Tambahkan "Keyboard".
    Hapus item terakhir.
    Tambahkan "Monitor" di awal array.
    Tampilkan seluruh isi array menggunakan join(", ").
    Tampilkan jumlah item menggunakan length.
 */

// const shoppingCart = [];

// shoppingCart.push("Laptop");
// shoppingCart.push("Mouse");
// shoppingCart.push("Keyboard");
// shoppingCart.pop();
// shoppingCart.unshift("Monitor");

// console.log(shoppingCart.join(", "));
// console.log(shoppingCart.length);

// ARRAY METHODS ( HIGH ORDER FUNCTION )

/*
=========================================
JavaScript Array Methods Cheat Sheet
=========================================

map()
Transform setiap elemen.
Return: Array baru dengan panjang yang sama.

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);

console.log(doubled);
// [2, 4, 6, 8, 10]

-----------------------------------------

filter()
Menyaring elemen yang memenuhi kondisi.
Return: Array baru.

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);
// [2, 4]

-----------------------------------------

reduce()
Menggabungkan seluruh isi array menjadi satu nilai.

const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);
// 15

-----------------------------------------

find()
Mengambil elemen pertama yang cocok.

const users = [
  { id: 1, name: "Vincent" },
  { id: 2, name: "Budi" },
  { id: 3, name: "Sinta" }
];

const user = users.find((item) => item.id === 2);

console.log(user);
// { id: 2, name: "Budi" }

-----------------------------------------

findIndex()
Mengambil index elemen pertama yang cocok.

const users = [
  { id: 1, name: "Vincent" },
  { id: 2, name: "Budi" },
  { id: 3, name: "Sinta" }
];

const index = users.findIndex((item) => item.id === 2);

console.log(index);
// 1

-----------------------------------------

some()
Mengembalikan true jika minimal satu elemen memenuhi kondisi.

const numbers = [10, 20, 30, 40];

const hasGreaterThan25 = numbers.some((num) => num > 25);

console.log(hasGreaterThan25);
// true

-----------------------------------------

every()
Mengembalikan true jika semua elemen memenuhi kondisi.

const numbers = [10, 20, 30, 40];

const allPositive = numbers.every((num) => num > 0);

console.log(allPositive);
// true

-----------------------------------------

forEach()
Menjalankan aksi pada setiap elemen.
Tidak mengembalikan array baru.

const fruits = ["Apple", "Orange", "Banana"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

// Apple
// Orange
// Banana

=========================================
Method Chaining
Menggabungkan beberapa method sekaligus.
=========================================

const products = [
  { name: "Mouse", price: 120000 },
  { name: "Keyboard", price: 250000 },
  { name: "Sticker", price: 5000 },
  { name: "Monitor", price: 1800000 }
];

const result = products
  .filter((product) => product.price > 10000)
  .map((product) => product.name)
  .reduce((text, name) => text + ", " + name);

console.log(result);

// Mouse, Keyboard, Monitor

*/
