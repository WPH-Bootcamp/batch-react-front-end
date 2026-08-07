// OBJECT REFERENCES AND COPYING

// Object di JavaScript disimpan berdasarkan
// reference (alamat memory), bukan value.
//
// Ketika object disalin menggunakan operator (=),
// yang disalin adalah alamat memory object tersebut,
// sehingga kedua variabel menunjuk object yang sama.

// REFERENCE COPY

const user1 = {
  name: "Vincent",
  age: 25,
};

const user2 = user1;

// Mengubah data melalui user2
user2.name = "Budi";

console.log(user1.name);
console.log(user2.name);

// Output
// Budi
// Budi

// Karena user1 dan user2 menunjuk object yang sama,
// perubahan pada salah satu object akan mempengaruhi object lainnya.

// SHALLOW COPY

// Gunakan Spread Operator (...)
// untuk membuat object baru.

const student1 = {
  name: "Vincent",
  age: 25,
};

const student2 = {
  ...student1,
};

student2.name = "Budi";

console.log(student1.name);
console.log(student2.name);

// Output
// Vincent
// Budi

// Spread Operator hanya menyalin property
// pada level pertama (Shallow Copy).

// SHALLOW COPY PADA NESTED OBJECT

const employee1 = {
  name: "Vincent",
  address: {
    city: "Jakarta",
  },
};

const employee2 = {
  ...employee1,
};

// Mengubah nested object
employee2.address.city = "Bandung";

console.log(employee1.address.city);
console.log(employee2.address.city);

// Output
// Bandung
// Bandung

// Nested object masih menggunakan reference
// yang sama sehingga perubahan ikut mempengaruhi object asli.

// DEEP COPY

// Gunakan structuredClone()
// untuk menyalin seluruh object
// beserta nested object.

const person1 = {
    city: "Jakarta",
  },
};

const person2 = structuredClone(person1);

person2.address.city = "Bandung";

console.log(person1.address.city);
console.log(person2.address.city);

// Output
// Jakarta
// Bandung

// Sekarang person1 dan person2 benar-benar
// menjadi object yang berbeda.

// KESIMPULAN

// ✔ Object disimpan berdasarkan reference.
// ✔ Operator (=) hanya menyalin reference.
// ✔ Spread Operator (...) membuat Shallow Copy.
// ✔ Shallow Copy hanya menyalin level pertama.
// ✔ structuredClone() membuat Deep Copy.
// ✔ Deep Copy cocok digunakan untuk object
//    yang memiliki nested object.
