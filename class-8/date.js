// DATE

// Membuat object Date (tanggal & waktu saat ini)
const today = new Date();

console.log("Tanggal & Waktu Saat Ini");
console.log(today);

// ===============================
// Mengambil Informasi Tanggal
// ===============================

console.log("\n=== Informasi Tanggal ===");

console.log("Tahun :", today.getFullYear());
console.log("Bulan :", today.getMonth() + 1); // +1 karena bulan dimulai dari 0
console.log("Tanggal :", today.getDate());

console.log("Jam :", today.getHours());
console.log("Menit :", today.getMinutes());
console.log("Detik :", today.getSeconds());

// ===============================
// Membuat Tanggal Tertentu
// ===============================

const birthday = new Date(2000, 5, 20);

console.log("\n=== Tanggal Lahir ===");
console.log(birthday);

// ===============================
// Timestamp
// ===============================

console.log("\n=== Timestamp ===");

const timestamp = Date.now();

console.log(timestamp);

// ===============================
// Menghitung Selisih Hari
// ===============================

const start = new Date("2026-01-01");
const end = new Date("2026-01-11");

const diffDay = (end - start) / (1000 * 60 * 60 * 24);

console.log("\n=== Selisih Hari ===");
console.log(diffDay, "hari");

// ===============================
// Menghitung Umur
// ===============================

const birthYear = 2000;
const age = today.getFullYear() - birthYear;

console.log("\n=== Umur ===");
console.log(age, "tahun");

// ===============================
// Format DD/MM/YYYY
// ===============================

const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();

console.log("\n=== Format Tanggal ===");
console.log(`${day}/${month}/${year}`);

// ===============================
// Format Jam
// ===============================

const hour = String(today.getHours()).padStart(2, "0");
const minute = String(today.getMinutes()).padStart(2, "0");

console.log(`${hour}:${minute}`);
