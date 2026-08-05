// =====================================
// REST PARAMETERS (...)
// =====================================

// Mengumpulkan banyak argument menjadi Array

function total(...numbers) {
  console.log(numbers);

  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(total(10, 20));
console.log(total(10, 20, 30));
console.log(total(10, 20, 30, 40));

// =====================================
// REST PADA DESTRUCTURING ARRAY
// =====================================

const fruits = ["Apple", "Orange", "Mango", "Banana", "Melon"];

const [first, second, ...others] = fruits;

console.log(first);
console.log(second);
console.log(others);

// =====================================
// SPREAD OPERATOR PADA ARRAY
// =====================================

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combineNumbers = [...numbers1, ...numbers2];

console.log(combineNumbers);

// =====================================
// COPY ARRAY
// =====================================

const originalArray = [10, 20, 30];

const copyArray = [...originalArray];

copyArray.push(40);

console.log(originalArray);
console.log(copyArray);

// =====================================
// SPREAD PADA OBJECT
// =====================================

const user = {
  name: "Vincent",
  age: 25,
};

const newUser = {
  ...user,
  city: "Jakarta",
};

console.log(user);
console.log(newUser);

// =====================================
// COPY OBJECT
// =====================================

const product = {
  name: "Laptop",
  price: 12000000,
};

const copyProduct = {
  ...product,
};

copyProduct.price = 10000000;

console.log(product);
console.log(copyProduct);

// =====================================
// SPREAD SAAT MEMANGGIL FUNCTION
// =====================================

const scores = [80, 90, 100];

console.log(Math.max(...scores));
console.log(Math.min(...scores));

// =====================================
// MENGGABUNGKAN OBJECT
// =====================================

const profile = {
  name: "Budi",
};

const address = {
  city: "Jakarta",
  country: "Indonesia",
};

const employee = {
  ...profile,
  ...address,
};

console.log(employee);

// =====================================
// MENGIRIM ARRAY KE FUNCTION
// =====================================

function multiply(a, b, c) {
  return a * b * c;
}

const values = [2, 3, 4];

console.log(multiply(...values));
