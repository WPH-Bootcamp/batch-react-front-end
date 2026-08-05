// JSON

/*
📖 JSON (JavaScript Object Notation)
    Apa itu JSON?

    JSON (JavaScript Object Notation) adalah format pertukaran data yang ringan dan mudah dibaca oleh manusia maupun komputer.

    JSON sering digunakan untuk mengirim dan menerima data antara:

    Frontend ↔ Backend
    Web ↔ API
    Mobile App ↔ Server
    Database ↔ Aplikasi

*/

// JSON (JavaScript Object Notation)

const user = {
  name: "Vincent",
  age: 25,
  city: "Jakarta",
};

// Object -> JSON String
const jsonString = JSON.stringify(user);

console.log(jsonString);

// JSON String -> Object
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);

// Mengakses kembali sebagai Object
console.log(jsonObject.name);
console.log(jsonObject.age);
