// Set

/**
 * Set adalah struktur data yang digunakan untuk menyimpan kumpulan nilai yang unik.

Artinya, tidak boleh ada data yang sama di dalam Set.

Jika kita menambahkan data yang sudah ada, JavaScript akan mengabaikannya.
 */

// Membuat Set baru
const numbers = new Set();

// Menambahkan data
numbers.add(10);
numbers.add(20);
numbers.add(30);

// Menghapus data
numbers.delete(30);

// Mengecek data
console.log(numbers.has(10));

// Mengetahui jumlah
console.log(numbers.size);

// Melakukan perulangan
for (let number of numbers) {
  console.log(number);
}

// Menghapus semua data
numbers.clear();
console.log(numbers);
