// Map

/**
 * Map adalah struktur data di JavaScript yang digunakan untuk menyimpan pasangan key dan value, mirip seperti object.

    Namun, Map memiliki beberapa kelebihan dibandingkan object:

    Key dapat berupa tipe data apa pun (string, number, object, bahkan function).
    Memiliki method bawaan untuk mengelola data.
    Mudah mengetahui jumlah data dengan size.
    Urutan data tetap sesuai urutan saat dimasukkan.
 */

// Membuat map baru
const student = new Map();

// Menambahkan data
student.set("name", "Vincent");
student.set("age", 25);
student.set("id", "vincent123");

// Mengambil data
console.log(student.get("name"));

// Menghapus data
student.delete("name");
// console.log(student);

// Cek key
console.log(student.has("name"));
console.log(student.has("age"));

// Mengetahui Jumlah Data
console.log(student.size);

// Melakukan perulangan
for (const [key, value] of student) {
  console.log(key, value);
}

/**
 * Kapan Menggunakan Map?
    Gunakan Map ketika:
    Key tidak selalu berupa string.
    Membutuhkan performa yang lebih baik untuk operasi penambahan dan penghapusan data.
    Ingin menggunakan method bawaan seperti set(), get(), has(), dan delete().
    Jika hanya menyimpan data sederhana dengan key berupa string, biasanya Object sudah cukup.
 */
